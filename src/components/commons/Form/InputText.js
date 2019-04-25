import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  padding: 0.5rem;
`;

const InputText = ({ ...rest }) => {
  return <Input {...rest} />;
};
export default InputText;
