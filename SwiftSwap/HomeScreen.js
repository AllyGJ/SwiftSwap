import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button ,
   FlatList, Navigator} from 'react-native';
import Category from './Category.js';
import CategoryPage from './CategoryPage.js'
// import DashboardScreen from './DashboardScreen.js';

// const MyApp = TabNavigator({
//   Dashboard: {
//     screen: DashboardScreen,
//   },
//   SwapHome: {
//     screen: HomeScreen,
//   },
// }, {
//   tabBarPosition: 'top',
//   animationEnabled: true,
//   tabBarOptions: {
//     activeTintColor: '#e91e63',
//   },
// });

var s = require('./Styles');

const itemsPerRow = 3;




const categories = [
  {
    key:0,
    title: "Food",
    image: require("./icons/groceries.png")
  },
  {
    key:1,
    title: "Clothing",
    image: require("./icons/trousers.png")
  },
  {
    key:2,
    title: "Electronics",
    image: require("./icons/laptop.png")
  },
  {
    key:3,
    title: "Furniture",
    image: require("./icons/couch.png")
  },
  {
    key:4,
    title: "Games",
    image: require("./icons/dice.png")
  },
  {
    key:5,
    title: "Services",
    image: require("./icons/wrenches.png")
  }
]


class HomeScreen extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  // static navigationOptions = {
  //   tabBarLabel: 'SwapHome',
  //   tabBarIcon: ({ tintColor }) => (
  //     <Image
  //       source={require('./images/exchange-arrows.png')}
  //       style={[styles.icon, {tintColor: tintColor}]}
  //     />
  //   ),
  // };

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
    //const { navigate } = this.props.navigation;
    //console.log("hello world")
    return (
      <View style={s.container}>
        <Text style={s.title}>SwiftSwap</Text>
        {/*<View style={{height: 20}} />*/}
        <Text style={s.description}>Choose a category and start swapping!</Text>
        {/*<View style={{height: 10}} />*/}
          <FlatList
            scrollEnabled={false}
            data={categories}
            numColumns={itemsPerRow}
            renderItem={li => {
              return <Category onDonePress={() => this._onForward(li.item.title)} key={li.index} title={li.item.title} image={li.item.image}/>
            }}
          />
        {/*<View style={{height: 30}} />*/}


      </View>
    )
  }
}

module.exports = HomeScreen;
