import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button } from 'react-native';

class HomeScreen extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    //this._onForward = this._onForward.bind(this);
  }

  // _onForward() {
  //   let nextIndex = ++this.props.index;
  //   this.props.navigator.push({
  //     component: Login,
  //     title: 'Scene ' + nextIndex,
  //     passProps: {index: nextIndex}
  //   });
  // }

  render() {
    return (
      <View>
        <Text>"HIIIIIII"</Text>
      </View>
    )
  }
}

module.exports = HomeScreen;