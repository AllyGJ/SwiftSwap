import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button , FlatList} from 'react-native';
import Category from './Category.js';
import CategoryPage from './CategoryPage.js'


const categories = [
  {
    key:0, 
    title: "Food",
    image: require("./images/leftovers.jpeg")
  },
  {
    key:1, 
    title: "Clothing",
    image: require("./images/clothes.jpeg")
  },
  {
    key:2, 
    title: "Electronics",
    image: require("./images/electronics.jpeg")
  },
  {
    key:3, 
    title: "Furniture",
    image: require("./images/furniture.jpeg")
  },
  {
    key:4, 
    title: "Games",
    image: require("./images/games.jpeg")
  },
  {
    key:5, 
    title: "Services",
    image: require("./images/services.png")
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
    this._onForward = this._onForward.bind(this);
  }

  _onForward(name) {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: CategoryPage,
      title: name,
      passProps: {index: nextIndex}
    });
  }



  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <View style={{height: 80}} />
        <Text style={{fontSize:40, fontWeight:'bold'}}>SwiftSwap</Text> 
        <View style={{height: 20}} />
        <Text style={{fontSize:18}}>Choose a category and start swapping!</Text> 
        <View style={{height: 10}} />
          <FlatList
            data={categories}
            renderItem={li => {
              console.log("li.index", li.index)
              return <Category onDonePress={this._onForward(li.item.title)} key={li.index} title={li.item.title} image={li.item.image}/>
            }}
          />
        <View style={{height: 30}} />

        
      </View>
    )
  }
}

module.exports = HomeScreen;