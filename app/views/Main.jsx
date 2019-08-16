import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import TodoFilterMenu, { menuItemsKeys} from 'components/TodoFilterMenu';
import TodoList from 'components/TodoList';
import { getTodoList } from 'utils/todoStorage';
import { getFilterObjectForKey, filterTodoItems } from 'utils/todoListUtils';


const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  filterContainer: {

  },
  mainContainer: {

  },
}

export default class TodoListView extends React.Component {
  static propTypes = {
    initialFilterKey: PropTypes.oneOf(menuItemsKeys),
  }

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
      this.setState({
          filterKey: key,
          items: filterItems(getTodoList(), key)
      })
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
