import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';


const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
};


export default class Menu extends React.PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
    })),
    onSelectItem: PropTypes.func.isRequired,
    triggerRenderer: PropTypes.element,
    itemRenderer: PropTypes.func,
  }

  static defaultProps = {
    triggerRenderer: (<Text>Show menu</Text>),
    itemRenderer: (item) => item.label
  }

  constructor(props) {
    super(props);
    this.menu = null;
    this.buttonForMenu = React.cloneElement(this.props.triggerRenderer, {
      onPress: this.showMenu,
    })
  }

  setMenuRef = ref => {
    this.menu = ref;
  };

  hideMenu = () => {
    this.menu.hide();
  };

  showMenu = () => {
    this.menu.show();
  };

  handlePressItem = (key) => {
    this.props.onSelectItem(key);
    this.hideMenu();
  }

  render() {

    return (
      <View style={styles.container}>
        <Menu
          ref={this.setMenuRef}
          button={this.props.triggerRenderer}
        >
          {
            this.props.items.map(item => {
              return (
                <MenuItem key={item.key} onPress={()=> this.handlePressItem(item.key)}>
                  {this.props.itemRenderer(item)}
                </MenuItem>
              );
            })
          }
        </Menu>
      </View>
    );
  }
}
