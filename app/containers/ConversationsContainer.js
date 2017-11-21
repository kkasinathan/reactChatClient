import { connect } from 'react-redux';
import ConversationList from '../components/ConversationList';
import { openConversation } from '../actions';

const mapStateToProps = (state) => {
  return {
    conversations: state.get('conversations')
  };
};

// TODO map dispatch

const mapDispatchToProps = (dispatch) => {
  return {
    onConversationClick: (conversationName) => {
      dispatch(openConversation(conversationName));
    }
  };
};

const ConversationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList);

export default ConversationsContainer;
