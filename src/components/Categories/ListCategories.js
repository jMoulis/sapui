import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import ListToolbarAction from 'components/commons/ListToolbarAction/ListToolbarAction';
import { useTranslation } from 'react-i18next';
import { fetchCategories } from 'store/reducers/categoryReducer';
import { setQuery } from '../../store/reducers/categoryReducer';

const Root = styled.div`
  label: CategoriesRoot;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fafafa;
`;

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
      name: {
        value: 'categroyID',
        title: t('categoryApp.categoryId'),
      },
      none: { value: '', title: t('commons.void') },
    },
  },
];

const filter = t => [
  {
    name: t('categoryApp.categoryId'),
    value: 'CategoryID',
    options: ['<100', '>100'],
  },
  {
    name: t('categoryApp.categoryName'),
    value: 'CategoryName',
    options: ['b', 'c'],
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
    <Root>
      <ListToolbarAction
        data={categories}
        isLoading={loading}
        actionMenuOptions={{
          sort: sort(t),
          group: group(t),
          filter: filter(t),
        }}
        keyValue="CategoryName"
        keyId="CategoryID"
        title="Categories"
        // refreshAction={refresh}
        pathToDetail="/exo/"
        callback={values => {
          setQueryAction(values);
        }}
      />
    </Root>
  );
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
