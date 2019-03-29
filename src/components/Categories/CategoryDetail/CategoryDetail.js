import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { keyframes } from '@emotion/core';
import { FlexBox } from 'components/Layout';
import { Loader } from 'components/commons/Loader';
import styled from '@emotion/styled';
import { Button } from 'components/commons/Buttons';
import { Title } from 'components/commons/Headings';
import { Panel } from 'components/commons/Panel';
import { fetchCategory, resetCategory } from 'store/reducers/categoryReducer';
import ListProducts from './ListProducts';

const Header = styled(FlexBox)`
  justify-content: space-between;
`;

const showIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
`;

const Root = styled(FlexBox)`
  flex-direction: column;
  animation-name: ${showIn};
  animation-fill-mode: forwards;
  animation-duration: 300ms;
`;

const CategoryDetail = ({
  callback,
  category,
  fetchCategoryAction,
  match,
  loading,
  history,
  resetCategoryAction,
}) => {
  const categoryId = match.params.category;
  useEffect(() => {
    callback(false);
    if (categoryId) {
      fetchCategoryAction(categoryId);
    }
    return () => {
      resetCategoryAction();
    };
  }, [categoryId]);

  if (!loading && !category) return <div>NoCat</div>;
  return (
    <Panel title="Category detail">
      {loading ? (
        <Loader />
      ) : (
        <Root>
          <Header>
            {/* <img
              src={`data:image/png;base64,${category.Picture}`}
              alt={category.CategoryName}
            /> */}
            <Title>{category.CategoryName}</Title>
            <FlexBox css={{ alignItems: 'center', marginRight: '1rem' }}>
              <Button action="danger" onClick={() => history.push('/category')}>
                X
              </Button>
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
        </Root>
      )}
    </Panel>
  );
};

CategoryDetail.propTypes = {
  callback: PropTypes.func,
  category: PropTypes.shape({}),
  fetchCategoryAction: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool,
  history: PropTypes.shape({}).isRequired,
  resetCategoryAction: PropTypes.func.isRequired,
};

CategoryDetail.defaultProps = {
  callback: PropTypes.func,
  category: PropTypes.shape({}),
  loading: PropTypes.bool,
};

const mapStateToProps = ({ categoryReducer }) => ({
  category: categoryReducer.categoryQuery.category,
  loading: categoryReducer.categoryQuery.loading,
  error: categoryReducer.categoryQuery.error,
  query: categoryReducer.query,
});

const mapDispatchToProps = dispatch => ({
  fetchCategoryAction: request => {
    dispatch(fetchCategory(request));
  },
  resetCategoryAction: () => {
    dispatch(resetCategory());
  },
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(CategoryDetail);
