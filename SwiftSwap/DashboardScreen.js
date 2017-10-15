/* Testing an alternative home screen.
   Instead of going straight to the categories, perhaps we go first into a
   user's "dashboard"

   The dashboard will allow you to then
   -Go to the swap HomeScreen or
   -Look at local events or
   -Change your settings

   Maybe we can also add a feature for FAQ/Help in this dashboard

   TODO: Figure out how to have _onForward() be different based on which
   category you choose...
    -For now, every category you press will take you to the HomeScreen
    -Currently using same "template" as the HomeScreen for each DashboardScreen
     category. Will have to change this to implement the different behaviors
     for each different click
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button, FlatList,
         StyleSheet, Dimensions } from 'react-native';
//import { ListItem } from 'native-base';
import Category from './Category.js';
//import CategoryPage from './CategoryPage.js'
import HomeScreen from './HomeScreen.js';
import SettingsScreen from './SettingsScreen.js';
import EventsScreen from './EventsScreen.js';
//import GridView from 'react-native-gridview';
//import EasyListView from 'react-native-easy-listview-gridview'
'use strict';

const itemsPerRow = 2;

var s = require('./Styles');
const {height, width} = Dimensions.get('window');



const categories = [
  {
    key:0,
    title: "Swap",
    image: require("./images/handshake-small.jpeg")
  },
  {
    key:1,
    title: "Events",
    image: require("./images/event-small.jpeg")
  },
  {
    key:2,
    title: "Settings",
    image: require("./images/settings-small.jpeg")
  }
]


class DashboardScreen extends React.Component {
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
      //component: DashboardCategoryPage,
      //title: name,
      component: HomeScreen,
      title: 'Home',
      // component: SettingsScreen,
      // title: 'Settings',
      passProps: {index: nextIndex}
    });
  }

  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {  // updater functions are preferred for transactional updates
    this.setState((state) => {  // copy the map rather than modifying state.
      const selected = new Map(state.selected); selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = (item) => {

    return
    <View style={s.card}
      image={item.image}
      text={item.title}
    />
      
  }

  render() {
    //console.log("hello world from dashboard")

    return (
      <View style={s.container}>
        <Text style={s.title}>
          SwiftSwap
        </Text>
        <Text style={s.description}>
          Welcome to your dashboard!
        </Text>
        <FlatList

          contentContainerStyle={s.list}

          data={categories}
          //numColumns={itemsPerRow}
          keyExtractor={(item, index) => index}
          renderItem={li => {
            return <Category onDonePress={() => this._onForward(li.item.title)} key={li.index} title={li.item.title} image={li.item.image}/>
          }}
        
        />
      </View>
    );

  }



}

module.exports = DashboardScreen;
