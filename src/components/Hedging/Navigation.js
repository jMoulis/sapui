/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({
  datas,
  setBreadCrumbs,
  fetchNavigationAction,
  config,
  initNavMenu,
}) => {
  const [selectedEntity, setEntity] = useState(null);
  if (initNavMenu)
    return (
      <ul>
        {Object.values(config.entities).map(menu => {
          console.log(menu);
          if (!menu.initMenu) return null;
          return (
            <li
              onClick={() => {
                // setBreadCrumbs(prevCrumbs => [...prevCrumbs, data]);
                // setEntity(config.entities[menu].label);
                fetchNavigationAction(menu.uri);
              }}
            >
              {menu.entity}
            </li>
          );
        })}
      </ul>
    );
  return (
    <ul>
      {datas.map(data => {
        return (
          <li
            onClick={() => {
              // setBreadCrumbs(prevCrumbs => [...prevCrumbs, data]);
              fetchNavigationAction(data.uri);
            }}
          />
        );
      })}
    </ul>
  );
};

export default Navigation;
