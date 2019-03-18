import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useODataApi, oDataRouter } from 'services/oData';
import PropTypes from 'prop-types';
import { List } from 'components/commons/List';

const BtnLink = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

const ListProducts = ({ match, callback }) => {
  const { data, isLoading, isError, doFetch } = useODataApi({
    responseKey: 'products',
    defaultValue: [],
  });
  useEffect(() => {
    const categoryId = match.params.category;
    callback(false);
    doFetch(oDataRouter.categoriesProducts(categoryId));
    return () => callback(true);
  }, []);

  if (isLoading) return <span>Loading</span>;
  if (isError) return <span>Error</span>;
  return (
    <List>
      {data.products &&
        data.products.map(product => (
          <li key={product.ProductID}>
            <BtnLink>{product.ProductName}</BtnLink>
          </li>
        ))}
    </List>
  );
};

ListProducts.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    url: PropTypes.string,
    path: PropTypes.string,
    staticContext: PropTypes.object,
    title: PropTypes.string,
  }).isRequired,
  callback: PropTypes.func.isRequired,
};

export default ListProducts;
