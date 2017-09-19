import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

const conversations = {
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
  'Kavin': []
};

export default class ConversationDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.data.name}`,
  });

  render() {
    const data = this.props.navigation.state.params.data;
    const sender = data.name;
    const messages = conversations[sender];
    const receiver = 'Kyle';

    const style = {
      alignItems: 'stretch'
    };

    return (
      <View>
        <MessageList messages={messages} sender={sender} receiver={receiver}/>
        <ConversationFooter />
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
