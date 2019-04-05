import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { List } from 'components/commons/List';
import { removeFromBreadcrumb } from './store/reducers/hedgingReducer';

const Root = styled(List)`
  display: flex;
`;

const BreadCrumb = ({ breadCrumb, removeFromBreadcrumbAction, home }) => {
  return (
    <Root>
      <li>
        <Link
          to={`/${home.uri}`}
          onClick={() => {
            removeFromBreadcrumbAction(-1);
          }}
        >
          {`${home.name} / `}
        </Link>
      </li>
      {breadCrumb &&
        breadCrumb.map((crumb, index) => {
          return (
            <li key={index}>
              <Link
                to={crumb.route}
                onClick={() => {
                  removeFromBreadcrumbAction(index);
                }}
              >
                {`${crumb.name} / `}
              </Link>
            </li>
          );
        })}
    </Root>
  );
};

BreadCrumb.propTypes = {
  breadCrumb: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromBreadcrumbAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({ hedgingReducer }) => ({
  breadCrumb: hedgingReducer.breadCrumb,
});

const mapDispatchToProps = dispatch => ({
  removeFromBreadcrumbAction: index => {
    dispatch(removeFromBreadcrumb(index));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BreadCrumb);
