/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'components/commons/List';
import { fetchCategoryProducts } from '../../store/reducers/categoryReducer';

const BtnLink = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

const ListProducts = ({
  match,
  callback,
  products,
  loading,
  error,
  fetchCategoryProductsAction,
}) => {
  useEffect(() => {
    const categoryId = match.params.category;
    callback(false);
    fetchCategoryProductsAction(categoryId);
    return () => callback(true);
  }, []);

  if (loading) return <span>Loading</span>;
  if (error) return <span>Error</span>;
  return (
    <List>
      {products &&
        products.map(product => (
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
  products: PropTypes.arrayOf(PropTypes.object),
  callback: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  fetchCategoryProductsAction: PropTypes.func.isRequired,
};

ListProducts.defaultProps = {
  products: null,
  error: null,
};

const mapStateToProps = ({ categoryReducer }) => ({
  products: categoryReducer.products,
  loading: categoryReducer.loading,
  error: categoryReducer.error,
});
const mapDispatchToProps = dispatch => ({
  fetchCategoryProductsAction: request => {
    dispatch(fetchCategoryProducts(request));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListProducts);
