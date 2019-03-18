import React from 'react';
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

export default FilterMenuDetail;
