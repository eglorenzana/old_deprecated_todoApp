import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

import TodoFilterMenu, { menuItemsKeys} from 'components/TodoFilterMenu';
import TodoList from 'components/TodoList';

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
    this.state = {
      filterKey: this.props.initialFilterKey,
      items: [],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <TodoFilterMenu activeKey={this.state.filterKey}/>
        </View>
        <View style={styles.mainContainer}>
          <TodoList items={this.state.items} />
        </View>
      </View>
    );
  }
}
