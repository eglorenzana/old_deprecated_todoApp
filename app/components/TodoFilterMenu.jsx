import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import Menu from 'app/components/Menu';
import { menuItems, menuItemsKeys } from 'app/utils/todoListUtils';


export { menuItemsKeys };


const TodoMenu = function(props) {
  const handleSelectItem = (key) => {
    props.onChangeFilter(key);
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
