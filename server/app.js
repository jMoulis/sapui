/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import expressGraphQL from 'express-graphql';
import cors from 'cors';

import keys from './config/keys';
import routes from './routes';
import Api from './services/Api';
import schema from './graphql';

mongoose.Promise = global.Promise;

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .catch(error => console.warn(error));
mongoose.connection.on('error', error =>
  console.warn('Warning', error.message),
);

const app = express();
routes(app);

app.use(
  '/graphql',
  cors(),
  bodyParser.json({ limit: '50mb' }),
  bodyParser.urlencoded({ limit: '50mb', extended: true }),
  expressGraphQL({ schema, graphiql: true }),
);
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
