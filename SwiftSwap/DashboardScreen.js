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
import { Text, View, Image, NavigatorIOS, Button, FlatList} from 'react-native';
import Category from './Category.js';
//import CategoryPage from './CategoryPage.js'
import HomeScreen from './HomeScreen.js';
import SettingsScreen from './SettingsScreen.js';
import GridView from 'react-native-gridview';
//import EasyListView from 'react-native-easy-listview-gridview'

const itemsPerRow = 3;


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
    //this.renderGridItem = this._renderGridItem.bind(this)
    //this.onFetch = this._onFetch.bind(this)
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


  render() {
    console.log("hello world from dashboard")
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
              return <Category onDonePress={() => this._onForward(li.item.title)} key={li.index} title={li.item.title} image={li.item.image}/>
            }}
          />
        <View style={{height: 30}} />


      </View>

        // <GridView
        //   data={categories}
        //   itemsPerRow={itemsPerRow}
        //   renderItem={(item) => {
        //     return (
        //       <View style={{ flex: 1, backgroundColor: '#8F8', borderWidth: 1 }}>
        //         <Text>{{'$item$'}}</Text>
        //       </View>
        //     );
        //   }}
        // />

    )
  }

  // _renderGridItem(index, rowData, sectionID, rowID, highlightRow) {
  //   return (
  //     <View
  //       key={index}
  //       style={GridStyles.rowContainer}>
  //       <TouchableHighlight
  //         style={{flex: 1}}
  //         onPress= {() => alert(rowData)}>
  //         <View
  //           style={GridStyles.rowContent}>
  //           <Text
  //             style={GridStyles.rowTitle}>
  //             {rowData}
  //           </Text>
  //         </View>
  //       </TouchableHighlight>
  //
  //     </View>
  //
  //
  //   )
  // }

  // _onFetch(pageNo, success, failure) {
  //   // ...
  // }
}

module.exports = DashboardScreen;
