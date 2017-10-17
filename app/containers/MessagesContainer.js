import { connect } from 'react-redux';
import ConversationDetail from '../components/ConversationDetail';

const mapStateToProps = state => {
  return {
    messages: state.messages[state.currentConversation],
    otherUser: state.currentConversation,
    currentUser: state.currentUser
  };
};

const MessagesContainer = connect(
  mapStateToProps
)(ConversationDetail);

export default MessagesContainer;
