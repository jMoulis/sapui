import React from 'react';
import PropTypes from 'prop-types';
import iconLoader from 'components/commons/Icons/IconLoader';
import { Button, BtnGroup } from 'components/commons/Buttons';
import { useTranslation } from 'react-i18next';
import { Icon } from 'components/commons/Icons';

const ActionMenuIcons = ({
  setMenuSelected,
  callback,
  menus,
  selectedMenu,
}) => {
  const { t } = useTranslation();
  return (
    <BtnGroup>
      {Object.keys(menus).map(key => {
        return (
          <Button
            key={key}
            type="button"
            title={t(`commons.${key}`)}
            isSelected={selectedMenu === key}
            onClick={() => {
              setMenuSelected(key);
              if (callback) {
                callback();
              }
            }}
          >
            <Icon dangerouslySetInnerHTML={{ __html: iconLoader[key] }} />
          </Button>
        );
      })}
    </BtnGroup>
  );
};

ActionMenuIcons.propTypes = {
  setMenuSelected: PropTypes.func.isRequired,
  menus: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  callback: PropTypes.func,
  selectedMenu: PropTypes.string,
};

ActionMenuIcons.defaultProps = {
  callback: null,
  selectedMenu: null,
};

export default ActionMenuIcons;
