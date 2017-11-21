import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

// const conversations = {
//   'Frank': [
//     {
//       received: true,
//       message: 'Hey whats up'
//     },
//     {
//       received: false,
//       message: 'nothing'
//     },
//   ],
//   'Kavin': []
// };

export default class ConversationDetail extends Component {

  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    // title: `${navigation.state.params.data.name}`,
    title: 'new title'
  });

  componentWillReceiveProps(updatedProps) {
    console.log(`current props: ${this.props}`);
    console.log(`new props: ${updatedProps}`);
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  sendMessage() {
    const onSendMessage = this.props.onSendMessage;
    onSendMessage('new message');
  }

  render() {
    const { messages, otherUser, currentUser } = this.props;

    const style = {
      alignItems: 'stretch'
    };

    return (
      <View>
        <MessageList messages={messages} sender={otherUser} receiver={currentUser}/>
        <ConversationFooter />
        <Button onPress={this.sendMessage} title={'Send'} />
      </View>
    );
  }
}

class MessageList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      dataSource: ds.cloneWithRows(this.props.messages),
    };
  }

  renderRow(rowData) {
    const name = rowData.received ? this.props.sender : this.props.receiver;
    const style = {
      textAlign: rowData.received ? 'left' : 'right'
    };
    return (
      <View>
        <Text style={style}>{name}</Text>
        <Text style={style}>{rowData.message}</Text>
      </View>
    );
  }

  render() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

class ConversationFooter extends Component {
  render() {
    const style = {
      height: 50,
      backgroundColor: 'gray'
    };
    return (
      <View style={style}/>
    );
  }
}

const styles = StyleSheet.create({
  header: {},
  footer: {}
});
