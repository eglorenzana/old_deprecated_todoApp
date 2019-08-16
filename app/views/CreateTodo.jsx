import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import TodoForm from 'components/TodoForm';
import ItemShape from 'shapes/itemShape';
import { todoDateCategoryKeys, initialPropsForKeys } from 'utils/todoListUtils';
import { saveNewItem } from 'utils/todoStorage';


const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  }
};

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