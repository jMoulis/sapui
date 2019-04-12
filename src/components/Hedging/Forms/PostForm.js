import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const fetchData = async (entity, callback) => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: `/api/v1/${entity}`,
    });
    callback(data);
    console.log(data);
  } catch (error) {
    console.error(`Fetch Plants${error.message}`);
  }
};
const PostForm = () => {
  const [inputValue, setInputValue] = useState({
    plant: '',
    product: '',
    quantity: '',
    date: '',
    delivered: '',
    price: '',
    provider: '',
    customer: '',
  });
  const [plants, setPlants] = useState([]);
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetchData('plants', setPlants);
    fetchData('products', setProducts);
  }, []);
  return (
    <>
      <h1>Sales</h1>
      <Form
        onSubmit={event => {
          event.preventDefault();
          axios({
            method: 'POST',
            url: '/api/v1/posts',
            data: {
              plant: inputValue.plant,
              product: inputValue.product,
              quantity: inputValue.quantity,
              date: inputValue.date,
              delivered: inputValue.delivered,
              price: inputValue.price,
              post: inputValue.post,
            },
          });
        }}
      >
        <input
          type="date"
          value={inputValue.date}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              date: value,
            }));
          }}
        />
        <label>PlantId</label>
        <select
          onChange={event => {
            const { value } = event.target;
            console.log(value);
            setInputValue(prevValue => ({
              ...prevValue,
              plant: value,
            }));
          }}
        >
          <option value="">{t('selectPlant')}</option>
          {plants &&
            plants.map(plant => (
              <option value={plant._id}>{plant.name}</option>
            ))}
        </select>
        <label>ProductID</label>
        <select
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              product: value,
            }));
          }}
        >
          <option value="">{t('selectProduct')}</option>
          {products &&
            products.map(product => (
              <option value={product._id}>{product.name}</option>
            ))}
        </select>
        <input
          value={inputValue.provider}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              provider: value,
            }));
          }}
          placeholder="Provider"
        />
        <input
          value={inputValue.customer}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              customer: value,
            }));
          }}
          placeholder="customer"
        />
        <input
          type="number"
          value={inputValue.quantity}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              quantity: value,
            }));
          }}
          placeholder="Quantity"
        />
        <input
          type="number"
          value={inputValue.price}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              price: value,
            }));
          }}
          placeholder="price"
        />
        <input
          type="date"
          value={inputValue.delivered}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              delivered: value,
            }));
          }}
        />
        <button type="submit">Add Sale</button>
      </Form>
      {/* <form
        onSubmit={event => {
          event.preventDefault();
          axios({
            method: 'PATCH',
            url: `/api/v1/posts/${inputValue.id}`,
            data: { name: inputValue.edit },
          }).then(response => console.log(response));
        }}
      >
        <input
          placeholder="PostId to edit"
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
        <input
          type="date"
          value={inputValue.delivered}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              delivered: value,
            }));
          }}
        />
        <button type="submit">Edit Sale</button>
      </form> */}
      <div>
        <button
          type="button"
          onClick={() => {
            axios({
              method: 'DELETE',
              url: `/api/v1/posts/${inputValue.id}`,
            }).then(response => console.log(response));
          }}
        >
          Delete sale
        </button>
      </div>
    </>
  );
};

export default PostForm;
