import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class ToggleButton extends React.Component {
  // create helper method
  renderItem = (item, index, list) => {
    return (
      <View style={[
        styles.button,
        // do dynamic style
        {
          marginLeft: index !== 0 ? 10 : 0 
        } 
        ]} key={item}>
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  }

  render() {
    const {items, value} = this.props

    return (
      <View style={styles.container}>
        {items.map(this.renderItem)}        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  button: {
    backgroundColor: 'purple',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 15
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
});
