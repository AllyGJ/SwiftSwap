import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button , TouchableOpacity} from 'react-native';
//import CategoryPage from './CategoryPage.js'
import HomeScreen from './HomeScreen.js';

var s = require('./Styles');
function Category(props) {
  
	return(	
		<TouchableOpacity onPress={props.onDonePress}>

    	<View style={s.categoryItem}>

    		<Image source={props.image} style={{width:100, height:100}}/>

    		{/* moves text to right */}
    		<View style={{width:10}}></View>

    		{/* moves text down */}
    		<View style={{flexDirection:'column',height:100}}>
    			<View style={{height:30}}></View>
    			<Text style={s.categoryItemText}>{props.title}</Text>
    		</View>
    	
    		
   		</View>
   		<View style={{height:30}}></View>
   	</TouchableOpacity>

	)
}

export default Category;
