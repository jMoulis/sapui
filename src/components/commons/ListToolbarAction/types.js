import PropTypes from 'prop-types';

export default {
  detail: {
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.string,
  },
  form: {
    sort: PropTypes.string,
    group: PropTypes.object,
    filter: PropTypes.object,
  },
};
