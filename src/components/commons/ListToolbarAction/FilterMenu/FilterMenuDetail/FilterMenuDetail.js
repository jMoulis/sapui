import React from 'react';
import PropTypes from 'prop-types';
import types from 'components/commons/ListToolbarAction/types';
import FilterMenuDetailList from './FilterMenuDetailList';
import FilterMenuHeader from './FilterMenuHeader';

const FilterMenuDetail = ({ detail, onSelect, form, goBack }) => {
  return (
    <>
      <FilterMenuHeader goBack={goBack} />
      <FilterMenuDetailList detail={detail} onSelect={onSelect} form={form} />
    </>
  );
};

FilterMenuDetail.propTypes = {
  detail: PropTypes.shape({ ...types.detail }),
  form: PropTypes.shape({ ...types.form }).isRequired,
  onSelect: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

FilterMenuDetail.defaultProps = {
  detail: null,
};

export default FilterMenuDetail;
