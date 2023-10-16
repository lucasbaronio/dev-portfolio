import { useMutation } from '@tanstack/react-query';
import sendMessage from '../sendMessage';

const MUTATIONS_NAME = {
  SEND_MESSAGE: 'SEND_MESSAGE',
};

export const useSendMessage = () =>
  useMutation([MUTATIONS_NAME.SEND_MESSAGE], (payload) => sendMessage(payload));
