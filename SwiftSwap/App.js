import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button } from 'react-native';
import { Font } from 'expo';
import Login from './Login.js';


export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Ubuntu-B': require('./fonts/Ubuntu-B.ttf'),
      'Ubuntu-R': require('./fonts/Ubuntu-R.ttf'),
      'Bariol_Regular': require('./fonts/Bariol_Regular.otf'),
  });
    this.setState({ fontLoaded: true });
  }


  render() {

    //var Login = require('./Login.js');

    // console.log(Login)

    //var admin = require("firebase-admin");

     //var serviceAccount = require("./swiftswap-5e411-firebase-adminsdk-eguqw-3d5df4a431.json");
     //console.log(serviceAccount)

    //   admin.initializeApp({
    //   credential: admin.credential.cert(serviceAccount),
    //   databaseURL: "https://<swiftswap-5e411>.firebaseio.com"
    // });


      if(this.state.fontLoaded) {
        return (
        <NavigatorIOS
          initialRoute={{
          component: Login,
          title: 'Log in',
          passProps: {index: 1},
          }}
          style={{flex: 1}}
        />);
    } else {
      return(<View/>);
    }


  }
}
