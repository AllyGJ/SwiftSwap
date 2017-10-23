import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button , FlatList,
TouchableOpacity} from 'react-native';
import NewPost from './NewPost.js'

var s = require('./Styles');

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
      passProps: {index: nextIndex, page:this.props.title}
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
      <TouchableOpacity onPress={()=> this._postNew()}>
         <View style={s.postContainer}>
            <Image source={require('./icons/chat.png')} style={{width:100, height:100}}/>
            <Text style={s.categoryItemText}>POST NEW ITEM</Text>
         </View>
      </TouchableOpacity>


       	</View>
      )
  }
}

export default CategoryPage;
