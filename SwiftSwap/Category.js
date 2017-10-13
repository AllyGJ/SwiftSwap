import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button , TouchableOpacity} from 'react-native';
//import CategoryPage from './CategoryPage.js'
import HomeScreen from './HomeScreen.js';


  function pressHandler() {
  	//this.props.onDonePress()
  }

function Category(props) {
	return(	
		<TouchableOpacity onPress={()=>pressHandler()}>

    	<View style={{flexDirection:'row',backgroundColor:'grey', width: 300, height: 100}}>

    		<Image source={props.image} style={{width:100, height:100}}/>

    		{/* moves text to right */}
    		<View style={{width:10}}></View>

    		{/* moves text down */}
    		<View style={{flexDirection:'column',height:100}}>
    			<View style={{height:30}}></View>
    			<Text style={{fontSize:30, fontWeight:'bold', color:'white'}}>{props.title}</Text>
    		</View>
    	
    		
   		</View>
   		<View style={{height:30}}></View>
   	</TouchableOpacity>

	)
}

export default Category;