import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import ListToolbarAction from 'components/commons/ListToolbarAction/ListToolbarAction';
import { useTranslation } from 'react-i18next';
import { setQuery, fetchCategories } from 'store/reducers/categoryReducer';
import { SubTitle } from 'components/commons/Headings';
import types from 'components/commons/ListToolbarAction/types';
import Panel from '../commons/Panel/Panel';

const sort = t => [
  {
    type: 'order',
    title: t('sorting.sortBy'),
    item: {
      asc: { value: 'asc', title: t('commons.asc') },
      desc: { value: 'desc', title: t('commons.desc') },
    },
  },
  {
    type: 'object',
    title: `${t('commons.sort')} ${t('sorting.sortByObject')}`,
    item: {
      nameItem: {
        value: 'CategoryName',
        title: t('categoryApp.categoryName'),
      },
      idItem: { value: 'CategoryID', title: t('categoryApp.categoryId') },
    },
  },
];

const group = t => [
  {
    type: 'order',
    title: t('grouping.groupBy'),
    item: {
      asc: { value: 'ASC', title: t('commons.asc') },
      desc: { value: 'DESC', title: t('commons.desc') },
    },
  },
  {
    type: 'object',
    title: `${t('grouping.groupByObject')}`,
    item: {
      idItem: {
        value: 'categroyID',
        title: t('categoryApp.categoryId'),
      },
      none: { value: '', title: t('commons.void') },
    },
  },
];

// field, value, operator
const filter = t => [
  {
    label: t('categoryApp.categoryId'),
    fieldName: 'CategoryID',
    options: [
      {
        operator: 'gt',
        value: 100,
      },
      {
        operator: 'lt',
        value: 100,
      },
    ],
  },
  {
    label: t('categoryApp.categoryName'),
    fieldName: 'CategoryName',
    options: [
      {
        operator: 'eq',
        value: 'Bevrages',
      },
    ],
  },
];

const ListCategories = ({
  categories,
  fetchCategoriesAction,
  loading,
  error,
  query,
  setQueryAction,
}) => {
  const { t } = useTranslation();
  useEffect(() => {
    fetchCategoriesAction(query);
  }, [query]);

  if (error) return <span>Error</span>;
  return (
    <Panel title={`Categories (${categories && categories.length})`}>
      <ListToolbarAction
        data={categories}
        isLoading={loading}
        menus={{
          sort: sort(t),
          group: group(t),
          filter: filter(t),
        }}
        keyValue="CategoryName"
        keyId="CategoryID"
        title="Categories"
        refreshAction={() => {
          setQueryAction();
        }}
        pathToDetail="/exo/"
        callback={values => setQueryAction(values)}
      />
    </Panel>
  );
};

ListCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({ ...types.category })),
  fetchCategoriesAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  query: PropTypes.string,
  setQueryAction: PropTypes.func.isRequired,
};

ListCategories.defaultProps = {
  categories: null,
  error: null,
  query: null,
};
const mapStateToProps = ({ categoryReducer }) => ({
  categories: categoryReducer.categories,
  loading: categoryReducer.loading,
  error: categoryReducer.error,
  query: categoryReducer.query,
});
const mapDispatchToProps = dispatch => ({
  fetchCategoriesAction: request => {
    dispatch(fetchCategories(request));
  },
  setQueryAction: query => {
    dispatch(setQuery(query));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListCategories);
