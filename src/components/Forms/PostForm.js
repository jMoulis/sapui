import React, { useState, useEffect } from 'react';
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

const Select = styled.select`
  display: block;
  border: none;
  padding: 0.5rem;
  outline: none;
  font-size: 1.5rem;
  height: 5rem;
  transition: all 250ms ease-in;
  background-color: rgba(86, 87, 89, 0.1);
  width: 100%;
  border-radius: 0;
`;

const fetchData = async (entity, callback) => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: `/api/v1/${entity}`,
    });
    callback(data);
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
    <Root>
      <Header>Posts</Header>
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
        <Input
          type="text"
          label="Date"
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
        <Select
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              plant: value,
            }));
          }}
        >
          <option value="">{t('selectPlant')}</option>
          {plants &&
            plants.map(plant => (
              <option key={plant._id} value={plant._id}>
                {plant.name}
              </option>
            ))}
        </Select>
        <label>ProductID</label>
        <Select
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
              <option key={product._id} value={product._id}>
                {product.name}
              </option>
            ))}
        </Select>
        <Input
          value={inputValue.provider}
          label="Provider"
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              provider: value,
            }));
          }}
        />
        <Input
          value={inputValue.customer}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              customer: value,
            }));
          }}
          label="Customer"
        />
        <Input
          type="text"
          value={inputValue.quantity}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              quantity: value,
            }));
          }}
          label="Quantity"
        />
        <Input
          type="text"
          value={inputValue.price}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              price: value,
            }));
          }}
          placeholder="Price"
        />
        <Input
          type="text"
          label="Date Delivered"
          value={inputValue.delivered}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              delivered: value,
            }));
          }}
        />
        <div>
          <Button lg type="submit">
            Add Sale
          </Button>
        </div>
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
      {/* <div>
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
      </div> */}
      <ul>
        <li>
          <Link to="/plants">
            <Title>{t('hedging.editPlant')}</Title>
          </Link>
        </li>
        <li>
          <Link to="/plants">
            <Title>{t('hedging.deletePlant')}</Title>
          </Link>
        </li>
      </ul>
    </Root>
  );
};

export default PostForm;
