import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, Image, NavigatorIOS, Button , FlatList} from 'react-native';
import CheckBox from 'react-native-checkbox';

class NewPost extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    //this._onForward = this._onForward.bind(this);

    this.state = {
      title:"",
      description:"",
      free:false,
      trade:false,
      date:"",
      time:"",
      address:""
    }
  }

  // _onForward(name) {
  //   let nextIndex = ++this.props.index;
  //   this.props.navigator.push({
  //     component: CategoryPage,
  //     title: name,
  //     passProps: {index: nextIndex}
  //   });
  // }



  render() {
    const checkImg = require('./images/checkedBox.png')
    const uncheckImg = require('./images/uncheckedBox.png')

  	return(
  	
  		<View style={{
        	flex: 1,
        	flexDirection: 'column'
      	}}>
      		<View style={{height: 80}} />
      		<Text>Title</Text>
      		<TextInput
      			style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      			onChangeText={(title) => this.setState({title})}
      			value={this.state.title}
      		/>
      		<Text>Description</Text>
      		<TextInput
      			multiline={true}
      			style={{height: 80, borderColor: 'gray', borderWidth: 1}}
      			onChangeText={(description) => this.setState({description})}
      			value={this.state.description}
      		/>

          <CheckBox
              label='Free'
              labelBefore = {true}
              onChange={(free) => this.setState({free})}
              checkedImage = {checkImg}
              uncheckedImage = {uncheckImg}
          />
          <CheckBox
              label='Trade'
              labelBefore = {true}
              onChange={(trade) => this.setState({trade})}
              checkedImage = {checkImg}
              uncheckedImage = {uncheckImg}
          />

      	</View>
  	)

  }
}


export default NewPost;