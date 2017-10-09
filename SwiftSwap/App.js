import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button } from 'react-native';


export default class App extends React.Component {
  render() {

    var Login = require('./Login.js');

    // console.log(Login)

    //var admin = require("firebase-admin");

     //var serviceAccount = require("./swiftswap-5e411-firebase-adminsdk-eguqw-3d5df4a431.json");
     //console.log(serviceAccount)  

    //   admin.initializeApp({
    //   credential: admin.credential.cert(serviceAccount),
    //   databaseURL: "https://<swiftswap-5e411>.firebaseio.com"
    // });

    return (
    
      <NavigatorIOS
        initialRoute={{
          component: Login,
          title: 'Log in',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
      
    )
  }
}

