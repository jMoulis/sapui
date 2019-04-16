import React from 'react';
import styled from '@emotion/styled';
import ProductForm from './ProductForm';
import PlantForm from './PlantForm';
import PostForm from './PostForm';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: lightgray;
  top: 10rem;
  left: 30rem;
`;
const FakeForm = () => {
  return (
    <Root>
      <PlantForm />
      <ProductForm />
      <PostForm />
    </Root>
  );
};

export default FakeForm;
