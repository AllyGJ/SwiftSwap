'use strict'

var React = require('react-native');

var {
  StyleSheet
} = React;

module.exports =  StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#F8E1B4',
    flexDirection: 'column',
    padding: 30,
    marginTop: 65,
  },
  title: {
    marginTop: 5,
    fontSize:40,
    fontFamily: 'Ubuntu-B',
    textAlign: 'center',
    marginBottom: 5,
    color: '#442D65',
  },
  description: {
    marginBottom: 10,
    fontFamily: 'Ubuntu-R',
    fontSize: 18,
    textAlign: 'center',
    color: '#775BA3',
  },
  list: { //Used by dashboard categories
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  listitem: { //Used by dashboard categories
    flex: 1,
    //fontSize: 20,
    margin: 5,
    width: 223,
    height: 304,
    backgroundColor: '#CCC',
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ddd',
    height: 130,
  },
  categoryItem:{
    flexDirection:'column',
    justifyContent: 'center',
    //backgroundColor: '#91C5A9',
    //width: 300,
    width: 100,
    height: 120,
    margin: 3,
  },
  categoryItemText:{
    fontSize:20,
    fontFamily: 'Bariol_Regular',
    //fontWeight:'bold',
    color: '#442D65',
    textAlign: 'center',
  },
  postContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postButton:{
    width:300,
    backgroundColor: '#F98A5F',
  },
  yellow:
  {
    color:'#F8E1B4',
  },
  darkPurple:
  {
    color: '#442D65',
  },
  lightPurple:
  {
    color: '#775BA3',
  },
  green:{
    color: '#91C5A9',
  },
  orange:{
    backgroundColor:'#F98A5F',
  },
});
