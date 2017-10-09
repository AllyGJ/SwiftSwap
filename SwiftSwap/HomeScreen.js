import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button , FlatList} from 'react-native';
import Category from './Category.js';


const dummyCats = [
  {
    key:0, 
    title: "Food",
    image: require("./images/smiley.jpg")
  },
  {
    key:1, 
    title: "Clothing",
    image: require("./images/smiley.jpg")
  }
]


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
          <FlatList
            data={dummyCats}
            renderItem={li => {
              console.log("li.index", li.index)
              return <Category key={li.index} title={li.item.title} image={li.item.image}/>
            }}
          />
        <View style={{height: 30}} />

        
      </View>
    )
  }
}

module.exports = HomeScreen;