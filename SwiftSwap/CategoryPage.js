import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, NavigatorIOS, Button , FlatList} from 'react-native';

class CategoryPage extends React.Component {
static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  
  constructor(props, context) {
    super(props, context);
  }


//  render() {

//     return (
//       )
//   }
}

module.exports = CategoryPage;