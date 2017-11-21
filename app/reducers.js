import {
  SEND_MESSAGE,
  START_CONVERSATION,
  OPEN_CONVERSATION
} from './actions.js'
import Immutable from 'immutable';

export default function reduce(state = Immutable.Map(), action) {
  if (action.type === OPEN_CONVERSATION) {
    return state.set('currentConversation', action.conversationName);
  } else if (action.type === SEND_MESSAGE) {
    const currentConversation = state.get('currentConversation')
    const messages = state.getIn(['messages', currentConversation]);
    const newMessage = Immutable.fromJS({
      received: false,
      message: action.message
    });
    const updatedMessages = messages.push(newMessage);
    return state.setIn(['messages', currentConversation], updatedMessages);
    // return state.updateIn(['messages', state.currentConversation], messageList => {
    //   return messageList.push();
    // });
  }
  return state;
}
