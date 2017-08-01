import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ConversationRow extends Component {
  render() {
    return (
      <View style={[this.props.style, styles.row]}>
        <Image
          style={styles.avatar}
          source={require('./nophoto.jpg')} />
        <Text
          style={styles.name}>
          {this.props.data.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50
  },
  name: {
    marginLeft: 10
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
