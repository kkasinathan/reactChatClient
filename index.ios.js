import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ConversationsContainer from './app/containers/ConversationsContainer';
import MessagesContainer from './app/containers/MessagesContainer';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduce from './app/reducers';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  conversations: [
    {name: 'Frank'},
    {name: 'Kavin'}
  ],
  messages: {
    'Frank': [
      {
        received: true,
        message: 'Hey whats up'
      },
      {
        received: false,
        message: 'nothing'
      },
    ],
    'Kavin': [
      {
        received: true,
        message: 'Hey whats up Kavin'
      },
      {
        received: false,
        message: 'nothing Kavin'
      }
    ]
  },
  currentConversation: 'Frank',
  currentUser: 'Kyle'
});

const store = createStore(reduce, initialState);

// export default class reactChatClient extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.convoHeader}/>
//         <ConversationList/>
//       </View>
//     );
//   }
// }

const ChatApp = StackNavigator({
  Home: { screen: ConversationsContainer },
  Detail: { screen: MessagesContainer }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ChatApp />
      </Provider>
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

AppRegistry.registerComponent('reactChatClient', () => App);
