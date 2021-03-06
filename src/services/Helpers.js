/* eslint-disable no-nested-ternary */
import { breakpoints } from 'styles/theme';

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

  slugify = str => {
    return str
      .toString()
      .replace(' ', '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(' ', '')
      .toLowerCase();
  };

  isSmallDevice = () =>
    window.matchMedia(`(max-width: ${breakpoints.sm}px)`).matches;
}

export default Helpers;
