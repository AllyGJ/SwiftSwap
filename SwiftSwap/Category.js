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


//const smily = require(props.image)

function Category(props) {
	console.log("image!!!", props.image)
	return(	
	<View>	 
    	<View style={{flexDirection:'row',backgroundColor:'grey', width: 300, height: 100}}>
    		<Image source={props.image} style={{width:100, height:100}}/>

    	
    		<Text style={{fontSize:20, fontWeight:'bold', textAlign:'justify'}}>{props.title}</Text>
    	
    		
   		</View>
   		<View style={{height:40}}></View>
   		</View>
	)
}

export default Category;