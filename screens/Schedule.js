import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ToggleButton from '../components/ToggleButton';

export default class Schedule extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={ require('../assets/bandung.jpg') }> 
          <Image style={styles.logo} source={ require('../assets/logo.png') } />
          <Text style={styles.title}>React Bandung Conference</Text>
          <ToggleButton 
            items={["THURSDAY", "FRIDAY"]}
            value={"THURSDAY"}
          />
        </Image>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    height: 200,
    width: null,
    //flexDirection: 'coloum' <-- default
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 24,
    fontWeight: '500'

  }
});
