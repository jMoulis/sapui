import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { oDataRouter, useODataApi } from 'services/oData';
import ListToolbarAction from 'components/commons/ListToolbarAction/ListToolbarAction';
import { useTranslation } from 'react-i18next';

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
      asc: { value: 'ASC', title: t('commons.asc') },
      desc: { value: 'DESC', title: t('commons.desc') },
    },
  },
  {
    type: 'object',
    title: `${t('commons.sort')} ${t('sorting.sortByObject')}`,
    item: {
      name: {
        value: 'CategoryName',
        title: t('categoryApp.categoryName'),
      },
      id: { value: 'CategoryID', title: t('categoryApp.categoryId') },
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

const ListCategories = () => {
  let timer = null;
  const { t } = useTranslation();
  const { data, isLoading, isError, doFetch, refresh } = useODataApi({
    responseKey: 'categories',
    defaultValue: [],
  });

  useEffect(() => {
    timer = setTimeout(() => {
      doFetch(oDataRouter.categories());
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [data]);

  if (isError) return <span>Error</span>;

  return (
    <Root>
      <ListToolbarAction
        data={data.categories}
        isLoading={isLoading}
        actionMenuOptions={{
          sort: sort(t),
          group: group(t),
          filter: filter(t),
        }}
        keyValue="CategoryName"
        keyId="CategoryID"
        title="Categories"
        refreshAction={refresh}
        pathToDetail="/exo/"
      />
    </Root>
  );
};

export default ListCategories;
