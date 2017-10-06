import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button } from 'react-native';

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
      component: Home,
      title: 'Home',
      passProps: {index: nextIndex}
    });
  }

  render() {

    var Home = require('./HomeScreen.js');

    return (
      <View>
        <Button
          onPress={this._onForward}
          title="Log In"
        />

      </View>
    )
  }
}

module.exports = Login;