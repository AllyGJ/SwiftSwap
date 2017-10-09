import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button } from 'react-native';

class Category extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: "Food",
			image: "",
			pressed: false
		};
	}


	render() {
    return (
    	<View style={{backgroundColor:'grey', width: 300, height: 100}}>
    		<Text>{this.state.title}</Text>
    	</View>
      
    )
  }
}

module.exports = Category;