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
  static navigationOptions = {
    title: 'Conversations',
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.openDetail = this.openDetail.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      dataSource: ds.cloneWithRows(props.conversations)
    };
  }

  renderRow(rowData) {
    const open = () => {this.openDetail(rowData)}
    return (
      <ConversationItem style={styles.row} data={rowData} onPress={open}/>
    );
  }

  openDetail(rowData) {
    this.props.navigation.navigate('Detail', { data: rowData });
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

const styles = StyleSheet.create({
  list: {
    // flex: 1
  },
  row: {
    height: 50,
    marginBottom: 10
  }
});
