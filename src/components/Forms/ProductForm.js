import React, { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Input } from 'components/commons/Form';
import { Button } from 'components/commons/Buttons';
import { Link } from 'react-router-dom';

const Root = styled.div`
  padding: 1rem;
`;

const Header = styled.h1``;
const Title = styled.h3``;
const Form = styled.form`
  margin: 2rem 0;
`;

const ProductForm = () => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState({
    create: '',
    edit: '',
    plant: '',
    id: '',
  });
  return (
    <Root>
      <Header>Products</Header>
      <Form
        onSubmit={event => {
          event.preventDefault();
          axios({
            method: 'POST',
            url: '/api/v1/products',
            data: {
              name: inputValue.create,
              plantID: inputValue.plant,
            },
          });
        }}
      >
        <Input
          value={inputValue.create}
          label={t('commons.name')}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              create: value,
            }));
          }}
        />
        <Input
          value={inputValue.plant}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              plant: value,
            }));
          }}
          label="PlantID"
        />
        <Button type="submit">Add product</Button>
      </Form>
      {/* <form
        onSubmit={event => {
          event.preventDefault();
          axios({
            method: 'PATCH',
            url: `/api/v1/products/${inputValue.id}`,
            data: { name: inputValue.edit },
          }).then(response => console.log(response));
        }}
      >
        <input
          placeholder="ProductId to edit"
          value={inputValue.id}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              id: value,
            }));
          }}
        />
        <input
          value={inputValue.edit}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              edit: value,
            }));
          }}
        />
        <button type="submit">Edit product</button>
      </form>
      <div>
        <button
          type="button"
          onClick={() => {
            axios({
              method: 'DELETE',
              url: '/api/v1/products/5ca5e26ef453aa71575b5aca',
            }).then(response => console.log(response));
          }}
        >
          Delete product
        </button>
      </div> */}
    </Root>
  );
};

export default ProductForm;
