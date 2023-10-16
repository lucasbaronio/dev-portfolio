import getAxiosInstance from './axios';
import { SLACK_CHANNEL, URLS } from './constants';
import format from './utils/format';
import parseAxiosError from './utils/parseAxiosError';

const sendMessage = async (payload, axios = getAxiosInstance()) => {
  try {
    const url = format(URLS.SEND_MESSAGE, SLACK_CHANNEL);
    const { data } = await axios.post(url, payload);
    return data;
  } catch (error) {
    console.error('[services][sendMessage][ERROR]', parseAxiosError(error).message);
    throw error;
  }
};

export default sendMessage;
