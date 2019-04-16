import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPlant } from 'store/reducers/plantReducer';

const PlantForm = ({ createPlantAction }) => {
  const [inputValue, setInputValue] = useState({
    create: '',
    edit: '',
    id: '',
  });
  return (
    <>
      <h1>Plants</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          createPlantAction({ name: inputValue.create });
          // axios({
          //   method: 'POST',
          //   url: '/api/v1/plants',
          //   data: { name: inputValue.create },
          // });
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
        <button type="submit">Add plant</button>
      </form>
      <form
        onSubmit={event => {
          event.preventDefault();
          axios({
            method: 'PATCH',
            url: `/api/v1/plants/${inputValue.id}`,
            data: { name: inputValue.edit },
          });
        }}
      >
        <input
          value={inputValue.id}
          placeholder="Plant Id to edit"
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
        <button type="submit">Edit plant</button>
      </form>
      <div>
        <button
          type="button"
          onClick={() => {
            axios({
              method: 'DELETE',
              url: `/api/v1/plants/${inputValue.id}`,
            }).then(response => console.log(response));
          }}
        >
          Delete plant
        </button>
      </div>
    </>
  );
};

PlantForm.propTypes = {
  createPlantAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createPlantAction: values => {
    dispatch(createPlant(values));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(PlantForm);
