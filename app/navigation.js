import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import { TodoMainFactory } from 'app/views/Main';
import { CreateTodoScreen, SCREEN_NAME } from 'app/views/CreateTodo';
import { menuItemsKeys } from 'app/utils/todoListUtils';
import { DrawerNavigatorConfig } from 'app/components/Drawer';


const Stacks = {}
menuItemsKeys.forEach(key => {
  const MainScreen = TodoMainFactory(key);
  Stacks[key] = createStackNavigator({ // in this way, we can provide the back behaviour easily
    TodoMain: MainScreen,
    [SCREEN_NAME]: CreateTodoScreen,
  }, {
    initialRouteName: 'TodoMain',
  });
});


export const DrawerRoutes = Object.freeze({
  today: Stacks.today,
  tomorrow: Stacks.tomorrow,
  someday: Stacks.someday,
  completed: Stacks.completed,
});

const DrawerNavigator = createDrawerNavigator(DrawerRoutes, {
  ...DrawerNavigatorConfig,
  initialRouteName: 'Today',
});

const AppNavigation = createAppContainer(DrawerNavigator);

export default AppNavigation;
