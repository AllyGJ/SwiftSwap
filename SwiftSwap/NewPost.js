import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, Image, NavigatorIOS, Button ,
  Alert, FlatList, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-checkbox';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from 'react-native-modal-datetime-picker';


var s = require('./Styles');

class NewPost extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._done = this._done.bind(this);

    this.state = {
      title:"",
      description:"",
      free:false,
      trade:false,
      tradeFor:"",
      date:"",
      address:"",
      isDateTimePickerVisible: false

    }
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleTimePicked = (date) => {

    console.log(date);
    this._hideDateTimePicker();
    this.setState(date);
  };

  // _onForward(name) {
  //   let nextIndex = ++this.props.index;
  //   this.props.navigator.push({
  //     component: CategoryPage,
  //     title: name,
  //     passProps: {index: nextIndex}
  //   });
  // }

  _done()
  {

    // this.props.navigator.push({
    //   component: props.page,

    // })


  }


  render() {
    const checkImg = require('./images/checkedBox.png')
    const uncheckImg = require('./images/uncheckedBox.png')

  	return(

  		<View style={{
        	flex: 1,
        	flexDirection: 'column',
          margin: 10
      	}}>
      		<View style={{height: 80}} />
      		<Text>Title</Text>
      		<TextInput
      			style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      			onChangeText={(title) => this.setState({title})}
      			value={this.state.title}
      		/>
          <View style={{height: 10}} />
      		<Text>Description</Text>
      		<TextInput
      			multiline={true}
      			style={{height: 80, borderColor: 'gray', borderWidth: 1}}
      			onChangeText={(description) => this.setState({description})}
      			value={this.state.description}
      		/>

          <View style={{height: 10}} />
          <CheckBox
              label='Free'
              labelBefore = {true}
              onChange={(free) => this.setState({free})}
              checkedImage = {checkImg}
              uncheckedImage = {uncheckImg}
          />
          <View style={{height: 10}} />
          <CheckBox
              label='Trade'
              labelBefore = {true}
              onChange={(trade) => this.setState({trade})}
              checkedImage = {checkImg}
              uncheckedImage = {uncheckImg}
          />

          <View style={{height: 10}} />
          <Text>If trade, for what?</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(tradeFor) => this.setState({tradeFor})}
            value={this.state.tradeFor}
          />

          <View style={{height: 10}} />
          {// <Text>Date item is available</Text>
          // <DatePicker
          //   style={{width: 200}}
          //   date={this.state.date}
          //   mode="date"
          //   placeholder="select date"
          //   format="MM-DD-YY"
          //   minDate="10-01-18"
          //   maxDate="01-01-20"
          //   confirmBtnText="Confirm"
          //   cancelBtnText="Cancel"
          //   customStyles={{
          //     dateIcon: {
          //     position: 'absolute',
          //     left: 0,
          //     top: 4,
          //     marginLeft: 0
          //   },
          //   dateInput: {
          //     marginLeft: 36
          //   }
          // // ... You can check the source to find the other keys.
          // }}
          // onDateChange={(date) => {this.setState({date})}}
          // />

          // <View style={{height: 10}} />
        }
          <Text> Date and time item is available</Text>

          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={this._showDateTimePicker}>
              <Image source={require('./images/clock.png')}/>
            </TouchableOpacity>

          </View>

          <Text>{this.state.date}</Text>

          <DateTimePicker
            mode='datetime'
            titleIOS='Pick a time'
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={(date)=>this._handleTimePicked(date)}
            onCancel={()=>this._hideDateTimePicker()}
          />

          <View style={{height: 10}} />
          <Text>Address</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(address) => this.setState({address})}
            value={this.state.address}
          />

            <View style={{height: 40}} />
           <View style={s.orange}>
            <Button
              title="DONE!"
              //onPress={()=> this._done()}
              onPress={() => Alert.alert('Success!',
                             'Your item has been submitted for review',
                             [{text: 'OK',
                                onPress: () => {this.props.navigator.pop();}},
                             ]
                           )
                      }
              color='white'
              />
          </View>

      	</View>
  	)

  }
}


export default NewPost;
