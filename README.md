# Conference App

## Code in App.js

### Part 1

    import React from 'react';
    import { StyleSheet, Text, View, Image } from 'react-native';

    export default class App extends React.Component {
      render() {
        return (
          <View style={styles.container}>
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>Conference Keynote</Text>
              <Text style={styles.subtitle}>Thursday, May 20</Text>
              <Text style={styles.description}>
                Hear aboout awesome technique, many people
                dont know what happening here, yay!
              </Text>
            </View>
            <View style={styles.speakerContainer}>
              <Image 
                style={styles.image}
                source={{ uri: 'http://unsplash.it/40/40' }}
                //source = { require('./assets/cat.jpg') } 
              />
              <View>
                <Text style={styles.speakerName}>Lucy Vati</Text>
                <Text style={styles.speakerBio}>Developer</Text>
              </View>
            </View>
          </View>
        );
      }
    }

    const IMAGE_SIZE = 40;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff'
      },
      detailsContainer: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4'
      },
      title: {
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 4
      },
      subtitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 12
      },
      description: {
        fontSize: 13
      },
      speakerContainer: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        flexDirection: 'row'
      },
      image: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE / 2,
        backgroundColor: "transparent",
        marginRight: 10
      },
      speakerName: {
        color: 'purple',
        fontSize: 16,
        fontWeight: '500'
      },
      speakerBio: {
        fontSize: 13
      }
    });

### Part 2

* Create new folder: screens
* Create new file: EventDetails.js
* Copy all from App.js to EventDetails.js
* Import EventDetails in App.js
* Create new file screens/Schedule.js
* Add Image to Schedule.js 

### Part 3

#### Toggle Button

vpart 2 basic list, 16:00

* Create new folder: components

* Create new file ToggleButton.js

* Quick do by copy Schedule.js to ToggleButton.js and update it respectfully.

* import ToggleButton.js into Schedule.js 

* And render ToggleButton below the text.

      <ToggleButton 
        items={["THURSDAY", "FRIDAY"]}
        value={"THURSDAY"}
      />

* In ToggleButton.js add props under render() function:

      render() {
        const {items, value} = this.props

* Create Helper method:

       renderItem = (item) => {
        return (
          <View>
            <Text>{item}</Text>
          </View>
        );
      }

* And add to return:

      return (
        <View style={styles.container}>
          {items.map(this.renderItem)}        
        </View>
      );

* Cover the warning with the key id:

      <View key={item}>
        <Text>{item}</Text>
      </View>
      
            