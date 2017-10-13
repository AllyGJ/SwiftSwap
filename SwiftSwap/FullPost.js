import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button , FlatList} from 'react-native';

class FullPost extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    //this._onForward = this._onForward.bind(this);
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
  }
}


export default FullPost;