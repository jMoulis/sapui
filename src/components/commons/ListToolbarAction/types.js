import PropTypes from 'prop-types';

export default {
  detail: {
    fieldName: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  },
  form: {
    sort: PropTypes.string,
    group: PropTypes.object,
    filter: PropTypes.string,
  },
  category: {
    CategoryID: PropTypes.number.isRequired,
    CategoryName: PropTypes.string.isRequired,
    Description: PropTypes.string,
    Picture: PropTypes.string,
  },
};
