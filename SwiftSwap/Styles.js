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
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#442D65',
  },
  description: {
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#775BA3',
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  listitem: {
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
    flexDirection:'row', 
    backgroundColor: '#91C5A9', 
    width: 300, 
    height: 100
  },
  categoryItemText:{
    fontSize:30, 
    fontWeight:'bold',
    color: '#442D65',
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