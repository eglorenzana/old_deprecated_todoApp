import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';

import ItemShape from 'shapes/itemShape';


const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  }
};


export default class TodoForm extends React.Component {
  static propTypes = {
      initialAttributes: PropTypes.shape(ItemShape),
      onSave: PropTypes.func.isRequired,
      message: PropTypes.string, 
      hasError: PropTypes.bool,
  }
  
  static defaultProperties = {
    message: '',
    hasError: false,
    initialAttributes: {}
  }
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  handleChangeTitle = (title) => {
    this.setState({ title });
  }
  
  render() {
    
    return (
      <View style={styles.container} >
        <TextField 
          label="Title" 
          value={this.state.title}
          onChangeText={this.handleChangeTitle}
        />
      </View>
    );
  }
}