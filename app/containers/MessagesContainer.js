import { connect } from 'react-redux';
import ConversationDetail from '../components/ConversationDetail';
import { sendMessage } from '../actions';

const mapStateToProps = state => {
  console.log('mapping state to props');
  const newProps = {
    messages: state.messages[state.currentConversation],
    otherUser: state.currentConversation,
    currentUser: state.currentUser
  };
  console.log(`mapped props: ${JSON.stringify(newProps, null, 2)}`);
  return newProps;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: (message) => {
      dispatch(sendMessage(message));
    }
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationDetail);

export default MessagesContainer;
