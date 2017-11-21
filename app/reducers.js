import {
  SEND_MESSAGE,
  START_CONVERSATION,
  OPEN_CONVERSATION
} from './actions.js'

export default function reduce(state = {}, action) {
  // technically state should be immutable
  const newState = Object.assign({}, state);

  if (action.type === OPEN_CONVERSATION) {
    newState.currentConversation = action.conversationName;
  } else if (action.type === SEND_MESSAGE) {
    newState.messages[state.currentConversation].push({
      received: false,
      message: action.message
    });
  }
  return newState;
}
