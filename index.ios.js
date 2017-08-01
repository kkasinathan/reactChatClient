/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ConversationList from './ConversationList';

export default class reactChatClient extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.convoHeader}/>
        <ConversationList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  convoHeader: {
    height: 45,
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('reactChatClient', () => reactChatClient);
