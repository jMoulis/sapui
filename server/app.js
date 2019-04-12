const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');
const routes = require('./routes');
const Api = require('./services/Api');

mongoose.Promise = global.Promise;

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .catch(error => console.warn(error));
mongoose.connection.on('error', error =>
  console.warn('Warning', error.message),
);

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

routes(app);

app.use((req, res) => {
  const api = new Api(res);
  return api.failure({ message: `Route ${req.url} not found.` }, 404);
});

app.use((req, res) => {
  const api = new Api(res);
  return api.failure({ message: 'Internal error' }, 500);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
