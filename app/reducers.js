import {
  SEND_MESSAGE,
  START_CONVERSATION,
  OPEN_CONVERSATION
} from './actions.js'
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  conversations: [
    {name: 'Frank'},
    {name: 'Kavin'}
  ],
  messages: {
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
    'Kavin': [
      {
        received: true,
        message: 'Hey whats up Kavin'
      },
      {
        received: false,
        message: 'nothing Kavin'
      }
    ]
  },
  currentConversation: 'Frank',
  currentUser: 'Kyle'
});

export default function reduce(state = initialState, action) {
  if (state === undefined) {
    return Immutable.Map();
  }
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
