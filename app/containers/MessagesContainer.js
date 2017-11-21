import { connect } from 'react-redux';
import ConversationDetail from '../components/ConversationDetail';
import { sendMessage } from '../actions';

const mapStateToProps = state => {
  console.log('mapping state to props');
  const currentConversation = state.get('currentConversation');
  const newProps = {
    messages: state.getIn(['messages', currentConversation]),
    otherUser: state.get('currentConversation'),
    currentUser: state.get('currentUser')
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
