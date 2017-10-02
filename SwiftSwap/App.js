import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    var smile = require('./images/smiley.jpg');
    return (
      <View style={styles.container}>
        <Image source={smile}/>
        <Text>Hi Beatriz!</Text>
        <Text>If you are reading this, you got the app to load correctly</Text>
        <Text>Now we just need to make the real app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
