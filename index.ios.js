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
import { createStore, combineReducers } from 'redux';
import reduce from './app/reducers';
import Immutable from 'immutable';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const config = {
  key: 'root',
  storage,
}

const reducer = persistCombineReducers(config, reduce);
// const reducer = combineReducers({reduce});


const store = createStore(reducer);
// const persistor = persistStore(store)

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
