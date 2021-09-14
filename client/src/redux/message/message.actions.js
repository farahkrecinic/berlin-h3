import MessageActionTypes from './message.types';

export const setMessage = (message) => ({
  type: MessageActionTypes.SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: MessageActionTypes.CLEAR_MESSAGE,
});