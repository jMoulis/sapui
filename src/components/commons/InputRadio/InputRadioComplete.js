import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import InputRadioDot from './InputRadioDot';
import InvisibleInput from './InvisibleInput';
import InputRadio from './InputRadio';

const Label = styled.label`
  cursor: pointer;
`;

export default function InputRadioComplete({
  id,
  show,
  name,
  value,
  onChange,
  label,
}) {
  return (
    <>
      <InputRadio data-name="input-radio">
        {show && <InputRadioDot data-name="input-radio-dot" />}
      </InputRadio>
      <Label htmlFor={value} onClick={onChange}>
        <InvisibleInput id={id} name={name} type="radio" value={value} />
        {label}
      </Label>
    </>
  );
}

InputRadioComplete.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  show: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

InputRadioComplete.defaultProps = {
  id: null,
  show: false,
  onChange: null,
};
