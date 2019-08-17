import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import TodoForm from 'app/components/TodoForm';
import ItemShape from 'app/shapes/itemShape';
import { todoDateCategoryKeys, initialPropsForKeys } from 'app/utils/todoListUtils';
import { saveNewItem } from 'app/utils/todoStorage';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  }
});

const CreateTodo = function(props) {
  let message = '';
  let hasError = false;
  function handleSaveTodo(item) {
    if (saveNewItem(item)) {
      message = 'Saved';
    } else {
      message = 'Error while saving';
      hasError = true;
    }
  }
  const dateKey = props.dateKey; // this should come from navigation params: props.navigation.params.dateKey
  return (
    <View style={styles.container} >
      <TodoForm
        initialAttributes={initialPropsForKeys[dateKey]}
        onSave={handleSaveTodo}
        message={message}
        hasError={hasError}
      />
    </View>
  );
}

CreateTodo.propTypes = {
  dateKey: PropTypes.oneOf(todoDateCategoryKeys)
};

export default CreateTodo;
