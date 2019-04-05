import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [inputValue, setInputValue] = useState({
    create: '',
    edit: '',
    plant: '',
    id: '',
  });
  return (
    <>
      <h1>Products</h1>
      <form
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
        <input
          value={inputValue.create}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              create: value,
            }));
          }}
        />
        <input
          value={inputValue.plant}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              plant: value,
            }));
          }}
          placeholder="PlantID"
        />
        <button type="submit">Add product</button>
      </form>
      <form
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
      </div>
    </>
  );
};

export default ProductForm;
