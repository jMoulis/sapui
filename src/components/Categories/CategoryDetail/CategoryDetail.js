import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FlexBox } from 'components/Layout';
import { Loader } from 'components/commons/Loader';
import { BtnClose, Button } from 'components/commons/Buttons';
import { Title } from 'components/commons/Headings';
import { fetchCategory } from 'store/reducers/categoryReducer';
import ListProducts from './ListProducts';
import styled from '@emotion/styled';

const Header = styled(FlexBox)`
  justify-content: space-between;
`;

const CategoryDetail = ({
  callback,
  category,
  fetchCategoryAction,
  match,
  loading,
}) => {
  useEffect(() => {
    const categoryId = match.params.category;
    callback(false);
    fetchCategoryAction(categoryId);
    return () => callback(true);
  }, []);
  if (loading && !category) return <Loader />;
  if (!loading && !category) return <div>No categroy found</div>;
  console.log(category);
  return (
    <FlexBox column css={{ flex: 1 }}>
      <Header>
        {/* <img
          src={`data:image/png;base64,${category.Picture}`}
          alt={category.CategoryName}
        /> */}
        <Title>{category.CategoryName}</Title>
        <FlexBox css={{ alignItems: 'center', marginRight: '1rem' }}>
          <Button action="danger">X</Button>
          <Button>Partager</Button>
        </FlexBox>
      </Header>
      <div>
        <p>{category.Description}</p>
      </div>
      <div>
        Filter icon system
        <div>Icon + Title</div>
        <div>Icon + Title</div>
        <div>Icon + Title</div>
        <div>Fiter descriptions</div>
      </div>

      <ListProducts products={category.products} />
    </FlexBox>
  );
};

const mapStateToProps = ({ categoryReducer }) => ({
  category: categoryReducer.category,
  loading: categoryReducer.loading,
  error: categoryReducer.error,
  query: categoryReducer.query,
});

const mapDispatchToProps = dispatch => ({
  fetchCategoryAction: request => {
    dispatch(fetchCategory(request));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryDetail);
