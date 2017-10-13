import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button , FlatList} from 'react-native';
import NewPost from './NewPost.js'

class CategoryPage extends React.Component {
static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  
  constructor(props, context) {
    super(props, context);
    this._postNew = this._postNew.bind(this);
  }

_postNew()
{
	console.log("post new")
	let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: NewPost,
      title: 'Create New Post',
      passProps: {index: nextIndex}
    });

}

 render() {
    return (
    	<View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      	}}>

      	{/* Post button */}
      	  <View style={{backgroundColor:'grey', width:300}}>
    		<Button
    			title="POST NEW ITEM"
    			onPress={()=> this._postNew()}
    			color='white'
    			/>
    	  </View>

    		
       	</View>
      )
  }
}

export default CategoryPage;