import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { dateString, timeString } from 'app/utils/dates';
import ItemShape from 'app/shapes/itemShape';


const styles = {
  title: {

  },
  dateDetails: {

  },
  description: {

  },
}


const Todo = function(props) {
  const {
    item: { title, date, description }, // this could be broke in line-per-property
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
      <View style={styles.description} >
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
