import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, Image, NavigatorIOS, Button } from 'react-native';
import HomeScreen from './HomeScreen.js';

class Login extends React.Component {

  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: HomeScreen,
      title: 'Home',
      passProps: {index: nextIndex}
    });
  }

  _getUserInfo()
  {

  }

  _setUserName(text){

  }

  _setPassword(text){

  }

  _createNewAccount()
  {

  }

  render() {

    return (
     <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

      <View style={{height: 30}} />
      <Text style={{textAlign:'center', fontSize:20,fontWeight:'bold'}}>SwiftSwap</Text>
        <View style={{height: 80}} />

        <Text>Username</Text>
        <TextInput
        style={{width:300,height: 40, borderColor: 'gray', borderWidth: 1}}
        />

        <View style={{height: 60}} />

        <Text>Password</Text>
        <TextInput
        style={{width: 300 ,height: 40, borderColor: 'gray', borderWidth: 1}}
        />

        <View style={{height: 100}} />
        <Button
          style={{borderWidth:1}}
          onPress={this._onForward}
          title="Log in"
        />

        <View style={{height: 50}} />
        <Button
          style={{borderWidth:1}}
          onPress={this._createNewAccount}
          title="Create new account"
        />
      </View>
     

      
    
    )
  }
}

module.exports = Login;