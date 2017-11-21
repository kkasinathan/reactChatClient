export const SEND_MESSAGE = 'SEND_MESSAGE';
export const START_CONVERSATION = 'START_CONVERSATION';
export const OPEN_CONVERSATION = 'OPEN_CONVERSATION';

export function openConversation(conversationName) {
  return {
    type: OPEN_CONVERSATION,
    conversationName
  }
}

export function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    message
  };
}

export function startConversation() {
  return {
    type: START_CONVERSATION
  };
}
