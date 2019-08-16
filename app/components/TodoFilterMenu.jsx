import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import Menu from 'components/Menu';
import { menuItems, menuItemsKeys } from 'utils/todoListUtils';


export { menuItemsKeys };


const TodoMenu = function(props) {
  const handleSelectItem = (key) => {
    props.onChangeFilter(menuItems[key].filterPropertiesGetter());
  }

  return (
    <Menu
      items={menuItems}
      onSelectItem={handleSelectItem}
      triggerRenderer={<Text>Filters</Text>}
    />
  );
}

TodoMenu.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
}

export default TodoMenu;