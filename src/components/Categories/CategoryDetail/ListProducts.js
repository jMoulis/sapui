import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { List, ListItem } from 'components/commons/List';
import { useTranslation } from 'react-i18next';

const ListItemCustom = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.5rem;
`;

const Text = styled.span`
  display: block;
  color: ${({ theme, status }) => theme.colors.status[status]};
`;

const setStatus = value => {
  if (value < 10) return 'danger';
  if (value > 10 && value < 50) return 'alert';
  return 'success';
};

const ListProducts = ({ products }) => {
  const { t } = useTranslation();
  return (
    <List>
      <ListItemCustom>
        <Text>{t('product.Name')}</Text>
        <Text>{t('product.UnitsInStock')}</Text>
      </ListItemCustom>
      {products &&
        products.map(product => (
          <ListItemCustom key={product.ProductID}>
            <Text>{product.ProductName}</Text>
            <Text status={setStatus(product.UnitsInStock)}>
              {product.UnitsInStock}
            </Text>
          </ListItemCustom>
        ))}
    </List>
  );
};

ListProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ListProducts.defaultProps = {
  products: null,
};

export default ListProducts;
