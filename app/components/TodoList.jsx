import React from 'react';
import { View, FlatList } from 'react-native';

import Todo from 'app/components/Todo';



const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  }
};


export default function TodoList(props) {
  return (
    <View style={styles.container} >
      <FlatList
        data={props.items}
        renderItem={Todo}
      />
    </View>
  );
};
