import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, Image, NavigatorIOS, Button } from 'react-native';
//import HomeScreen from './HomeScreen.js';
import DashboardScreen from './DashboardScreen.js';


var s = require('./Styles');

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


    this.state = {
      username:"",
      password:""
    }
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      //component: HomeScreen,
      //title: 'Home',
      component: DashboardScreen,
      title: 'Dashboard',
      passProps: {index: nextIndex}
    });
  }

  _getUserInfo()
  {

  }

  // _setUserName(username){
  //   console.log(username)
  //  // this.setState({username})
  // }

  // _setPassword(password){
  //   console.log(password)
  //   //this.setState({password})
  // }

  _createNewAccount()
  {

  }

  render() {

    return (
     <View style={
        s.container
      // {
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   backgroundColor:'#F8E1B4'
      // }
    }>

      <View style={{height: 30}} />
      <Text style={s.title}>SwiftSwap</Text>
        <View style={{height: 80}} />

        <Text>Username</Text>
        <TextInput
        value={this.state.username}
        onChangeText={(username) => this.setState({username})}
        style={{width:300,height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor:'white'}}
        />

        <View style={{height: 60}} />

        <Text>Password</Text>
        <TextInput
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={(password) => this.setState({password})}
        style={{width: 300 ,height: 40, borderColor: 'gray', borderWidth: 1,backgroundColor:'white'}}
        />

        <View style={{height: 80}} />
        <Button
          style={{borderWidth:2}}
          onPress={this._onForward}
          title="Log in"
        />

        <View style={{height: 30}} />

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
