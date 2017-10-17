import { connect } from 'react-redux';
import ConversationList from '../components/ConversationList';

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations
  };
};

const ConversationsContainer = connect(
  mapStateToProps
)(ConversationList);

export default ConversationsContainer;
