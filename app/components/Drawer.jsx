
import React  from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import {
    View,
    Image,
    StyleSheet,
    Linking,
    TouchableHighlight,
    Text
} from 'react-native';

import { DrawerRoutes } from 'app/routes';
import palette from 'app/assets/palette';

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: 'white'
  },
  menuItemText: {
    margin:0,
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontSize: 12,
    color:  '#666666',
  },
  menuItemTextRed:{
    color: '#f44336',
  }
  drawerSecondaryOptions: {
    marginTop: 30,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#d9d9d9",
  }
});

const customDrawerContentComponent = function(props) {
  return (
    <View style={styles.drawerContent}>
      <DrawerItems {...props} />
      <View style={styles.drawerSecondaryOptions}>
        <TouchableHighlight underlayColor='#d9d9d9'   onPress={ () => console.log('Settings pressed') }  >
            <Text style={[styles.menuItemText, styles.menuItemTextRed]}> Settings </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const drawerNavigatorConfig = {
  drawerWidth: 250,
  drawerPosition: 'left',
  contentComponent: customDrawerContentComponent,
  contentOptions: {
    activeTintColor: palette.accentColor,
    activeBackgroundColor: 'transparent',
    inactiveTintColor: palette.primaryDarkColor,
    inactiveBackgroundColor: 'transparent',
    style: {
      margin: 0,
      padding: 0,
    }
  },
  initialRouteName: 'Notifications'
}


const AppNavigation = DrawerNavigator({
  ...DrawerRoutes,
}, drawerNavigatorConfig);


export default AppNavigation
