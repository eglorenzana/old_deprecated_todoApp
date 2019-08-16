import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { dateString, timeString } from 'utils/dates';
import ItemShape from 'shapes/itemShape';


const styles = {
  title: {

  },
  dateDetails: {

  },
  notes: {

  },
}


const Todo = function(props) {
  const {
    item: { title, date, notes }, // this could be broke in line-per-property
    showDate,
  } = props;

  return (
    <View>
      <View style={styles.title} >
        <Text>{title}</Text>
      </View>
      <View style={styles.dateDetails} >
        { showDate && <Text>{dateString(date)}</Text> }
        <Text>{timeString(date)}</Text##>
      </View>
      <View style={styles.notes} >
      </View>
    </View>
  );
}


Todo.propTypes = {
  item: ItemShape,
  showDate: PropTypes.bool,
}

Todo.defaultProps = {
  showDate: false
}

export default Todo;
