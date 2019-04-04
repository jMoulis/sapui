import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Switch } from 'react-router-dom';
import { Loader } from 'components/commons/Loader';
import { RouteWithSubRoutes } from 'services/routesConfigurator';
import { connect } from 'react-redux';
import { fetchNavigation } from './store/reducers/navigationReducer';
import Navigation from './Navigation';
import FakeForm from './FakeForm';

const Root = styled.div`
  display: flex;
  flex: 1;
`;
const LeftPanel = styled.aside`
  box-shadow: 0 14px 20px 2px rgba(0, 0, 0, 0.3);
  width: ${({ isCollapse }) => (isCollapse ? '5rem' : '20rem')};
  transition: all 200ms ease-in-out;
  overflow: hidden;
`;
const Body = styled.section`
  flex: 1;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hedging = ({ loading, config, fetchNavigationAction, navQuery }) => {
  const [isForm, displayForm] = useState(false);
  const [isCollapse, setCollapse] = useState(false);

  if (loading) return <Loader />;
  if (!config) return <Loader />;

  return (
    <Root>
      <LeftPanel isCollapse={isCollapse}>
        <FlexBox>
          <button type="button" onClick={() => setCollapse(!isCollapse)}>
            hide
          </button>
          <button type="button" onClick={() => displayForm(!isForm)}>
            ShowForms
          </button>
        </FlexBox>
        <Navigation />
      </LeftPanel>
      <Body>
        <Switch>
          {config.router.hedging.routes.map((route, i) => {
            return (
              <RouteWithSubRoutes
                key={i}
                config={config}
                {...route}
                callback={fetchNavigationAction}
                datas={navQuery.datas}
              />
            );
          })}
        </Switch>
      </Body>
      {isForm && <FakeForm />}
    </Root>
  );
};

Hedging.propTypes = {
  loading: PropTypes.bool.isRequired,
  config: PropTypes.shape({
    entities: PropTypes.object,
    router: PropTypes.object,
    initNavMenu: PropTypes.arrayOf(PropTypes.string),
  }),
  fetchNavigationAction: PropTypes.func.isRequired,
  navQuery: PropTypes.shape({
    error: PropTypes.string,
    datas: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
  }).isRequired,
};

Hedging.defaultProps = {
  config: null,
};

const mapStateToProps = ({ hedgingReducer, navigationReducer }) => ({
  loading: hedgingReducer.loading,
  config: hedgingReducer.config,
  navQuery: navigationReducer.navQuery,
});

const mapDispatchToProps = dispatch => ({
  fetchNavigationAction: entity => {
    dispatch(fetchNavigation(entity));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hedging);
