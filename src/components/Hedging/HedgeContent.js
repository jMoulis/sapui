import React from 'react';

const HedgeContent = ({ title, ...rest }) => {
  console.log(rest);
  return <h1>{title}</h1>;
};

export default HedgeContent;
