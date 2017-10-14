/* Empty SettingsScreen */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, Image, NavigatorIOS, Button , FlatList} from 'react-native';

class SettingsScreen extends React.Component {

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
      <Text style={{textAlign:'center', fontSize:40,fontWeight:'bold'}}>SwiftSwap</Text>
      <View style={{height: 80}} />
      <Text style={{fontSize:18}}>This will be the settings page</Text>
      <View style={{height: 10}} />


     </View>

    )
  }


}

module.exports = SettingsScreen;
