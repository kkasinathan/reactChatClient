export const SEND_MESSAGE = 'SEND_MESSAGE';
export const START_CONVERSATION = 'START_CONVERSATION';

export function sendMessage() {
  return {
    type: SEND_MESSAGE
  };
}

export function startConversation() {
  return {
    type: START_CONVERSATION
  };
}
