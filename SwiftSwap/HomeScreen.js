import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button , FlatList} from 'react-native';
import Category from './Category.js';

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
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{height: 30}} />
        <Text style={{textAlign:'center', fontSize:20,fontWeight:'bold'}}>SwiftSwap</Text>
        
        <View style={{height: 30}} />

        <FlatList
          data={[{key:<Category/>}, {key:<Category/>}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      
      </View>
    )
  }
}

module.exports = HomeScreen;