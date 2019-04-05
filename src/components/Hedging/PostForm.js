import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [inputValue, setInputValue] = useState({
    create: '',
    edit: '',
    id: '',
  });
  return (
    <>
      <h1>posts</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          axios({
            method: 'POST',
            url: '/api/v1/posts',
            data: {
              orderId: inputValue.create,
              plantId: inputValue.plant,
              productId: inputValue.product,
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
        <input
          value={inputValue.product}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              product: value,
            }));
          }}
          placeholder="ProductId"
        />
        <button type="submit">Add post</button>
      </form>
      <form
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
        <button type="submit">Edit post</button>
      </form>
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
          Delete post
        </button>
      </div>
    </>
  );
};

export default PostForm;
