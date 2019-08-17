// here ,
// one route for the Main View,
// one route for the CreateTodo View


// export also the screen names, so that, it can be used in the drawer
import React  from 'react';

import Main from 'app/views/Main';


const Today = function(props) {
  return (<Main {...props} initialFilterKey="today" />);
}

const Tomorrow = function(props) {
  return (<Main {...props} initialFilterKey="tomorrow" />);
}

const SomeDay = function(props) {
  return (<Main {...props} initialFilterKey="someday" />);
}

const Completed = function(props) {
  return (<Main {...props} initialFilterKey="completed" />);
}


export const DrawerRoutes = Object.freeze({
  Today: { screen: Today },
  Tomorrow: { screen: Tomorrow },
  Someday: { screen: SomeDay },
  Completed: { screen: Completed },
});


// add here the stack navigator for the create
