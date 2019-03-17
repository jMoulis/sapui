/* eslint-disable no-nested-ternary */
class Helpers {
  sorting = ({ array, key, order }) => {
    return array.sort((value, nextValue) => {
      const valueToLowerCase = value[key].toString().toLowerCase();
      const nextValueToLowerCase = nextValue[key].toString().toLowerCase();
      const desc =
        valueToLowerCase < nextValueToLowerCase
          ? 1
          : valueToLowerCase > nextValueToLowerCase
          ? -1
          : 0;
      const asc =
        valueToLowerCase < nextValueToLowerCase
          ? -1
          : valueToLowerCase > nextValueToLowerCase
          ? 1
          : 0;
      return order === 'ASC' ? asc : desc;
    });
  };
}

export default Helpers;
