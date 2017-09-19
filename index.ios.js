import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ConversationList from './ConversationList';
import ConversationDetail from './ConversationDetail';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduce from './reducers';

let store = createStore(reduce);

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
  Home: { screen: ConversationList },
  Detail: { screen: ConversationDetail }
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
