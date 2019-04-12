import React from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { RouteWithSubRoutes } from 'services/routesConfigurator';

const HedgePlantDetail = ({ title, routes, datas, ...rest }) => {
  console.log(datas);
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default HedgePlantDetail;
