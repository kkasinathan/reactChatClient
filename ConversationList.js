import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';
import ConversationItem from './ConversationItem';

export default class ConversationList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {name: 'Frank'},
        {name: 'Kavin'}
      ]),
    };
  }

  render() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <ConversationItem style={styles.row} data={rowData}/>}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    // flex: 1
  },
  row: {
    height: 50,
    marginBottom: 10
  }
});
