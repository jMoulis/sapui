import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { createPlant } from 'store/reducers/plantReducer';
import { Input } from 'components/commons/Form';
import { Button } from 'components/commons/Buttons';
import { useTranslation } from 'react-i18next';

const Root = styled.div`
  padding: 1rem;
`;

const Header = styled.h1``;
const Title = styled.h3``;
const Form = styled.form`
  margin: 2rem 0;
`;
const PlantForm = ({ createPlantAction }) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState({
    create: '',
    edit: '',
    id: '',
  });
  return (
    <Root>
      <Header>{t('hedging.plants')}</Header>
      <Form
        onSubmit={event => {
          event.preventDefault();
          createPlantAction({ name: inputValue.create });
        }}
      >
        <Title>{t('hedging.addNewPlant')}</Title>
        <Input
          value={inputValue.create}
          name="create"
          label={t('commons.name')}
          onChange={value => {
            setInputValue(prevValue => ({
              ...prevValue,
              ...value,
            }));
          }}
        />
        <Button type="submit">{t('commons.create')}</Button>
      </Form>
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
      {/* <Form
        onSubmit={event => {
          event.preventDefault();
          axios({
            method: 'PATCH',
            url: `/api/v1/plants/${inputValue.id}`,
            data: { name: inputValue.edit },
          });
        }}
      >
        <Title>{t('hedging.editPlant')}</Title>
        <Input
          value={inputValue.id}
          label="Plant Id"
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              id: value,
            }));
          }}
        />
        <Input
          value={inputValue.edit}
          label={t('commons.name')}
          onChange={event => {
            const { value } = event.target;
            setInputValue(prevValue => ({
              ...prevValue,
              edit: value,
            }));
          }}
        />
        <Button type="submit">Edit plant</Button>
      </Form>
      <div>
        <Button
          type="button"
          action="danger"
          onClick={() => {
            axios({
              method: 'DELETE',
              url: `/api/v1/plants/${inputValue.id}`,
            }).then(response => console.log(response));
          }}
        >
          Delete plant
        </Button>
      </div> */}
    </Root>
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
