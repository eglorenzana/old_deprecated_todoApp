import React from 'react'
import { FloatingAction } from 'react-native-floating-action';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MDIcon from 'react-native-vector-icons/MaterialDesign';
import { actionsForMainFAB } from 'app/utils/todoListUtils';


const actions = actionsForMainFAB.map((action) => {
  const { iconName, material, ...rest } = action;
  const Icon = material ? MDIcon : FAIcon;
  return {
    ...rest,
    icon: <Icon name={iconName} />
  };
});

export default function CreateTodoFAB(props) {
  const navigateToCreate = function(params = {}) {
    // code for navigation and pass the params, something like:
    // props.navigation.navigate(screenName, params)
  }

  const handleSelectAction = function(actionName) {
    navigateToCreate({ dateKey: actionName });
  }

  return (
    <FloatingAction
      actions={actions}
      onPressItem={handleSelectAction}
    />
  );
}
