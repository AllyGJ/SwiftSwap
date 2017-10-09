import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button } from 'react-native';

// class Category extends React.Component {
	
// 	render() {
// 		console.log(this.props)
//     	return (
//     		<View style={{backgroundColor:'grey', width: 300, height: 100}}>
//     			<Text>{this.props.title}</Text>
//     		</View>
//     )
//   }
// }

function Category(props) {
	console.log("image!!!", props.image)
	return(		 
    	<View key={props.key} style={{backgroundColor:'grey', width: 300, height: 100}}>
    		<Text>{props.title}</Text>
    		<Image source={props.image}/>
   		</View>
	)
}

export default Category;