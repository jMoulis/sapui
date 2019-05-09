import React from 'react';
import DefaultTile from 'components/Dashboard/DefaultTile';
import { Chart } from 'components/Dashboard/Chart';
import { tiles, widgets } from 'components/Dashboard/fakeData';

const Config = () => {
  return (
    <>
      <h1>Config</h1>
      {Array.isArray(tiles) &&
        tiles.map((item, index) => {
          const Widget = widgets[item.component.name];
          return (
            <DefaultTile
              item={item}
              position={item && item.position}
              key={index}
              id={item.id}
              text={item.id}
              height="20rem"
              width="20rem"
            >
              {Widget ? <Widget {...item.component.props} /> : null}
            </DefaultTile>
          );
        })}
    </>
  );
};

export default Config;
