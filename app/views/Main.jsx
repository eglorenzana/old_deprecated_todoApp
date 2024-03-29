import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import TodoFilterMenu, { menuItemsKeys} from 'app/components/TodoFilterMenu';
import TodoList from 'app/components/TodoList';
import { getTodoList } from 'app/utils/todoStorage';
import { getFilterObjectForKey, filterTodoItems } from 'app/utils/todoListUtils';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  filterContainer: {

  },
  mainContainer: {

  },
});

export default class TodoListView extends React.Component {
  static propTypes = {
    initialFilterKey: PropTypes.oneOf(menuItemsKeys),
  }

  static navigationOptions = {
    title: 'Todos',
  };

  constructor(props) {
    super(props);
    const list = getTodoList()

    this.state = {
      filterKey: this.props.initialFilterKey,
      items: filterItems(getTodoList(), this.props.initialFilterKey),
    }
  }

  filterItems = (itemList, key) => {
      return filterTodoItems(itemList, getFilterObjectForKey(key));
  }

  handleOnChangeFilter = (key) => {
      this.props.navigator.navigate(key);
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <TodoFilterMenu
                    activeKey={this.state.filterKey}
                    onChangeFilter={this.handleOnChangeFilter}
                />
            </View>
            <View style={styles.mainContainer}>
                <TodoList items={this.state.items} />
            </View>
        </View>
    );
  }
}

export function TodoMainFactory(filterKey) {
  return (<TodoListView {...props} initialFilterKey={filterKey} />);
}
