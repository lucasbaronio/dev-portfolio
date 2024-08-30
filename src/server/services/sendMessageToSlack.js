import { SLACK_CHANNEL, URLS } from '../constants/slack.js';
import format from '../utils/formatURL.js';
import parseAxiosError from '../utils/parseAxiosError.js';

const sendMessage = async (payload) => {
  try {
    const url = format(URLS.SEND_MESSAGE, SLACK_CHANNEL);
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error('[services][sendMessage][ERROR]', parseAxiosError(error).message);
    throw error;
  }
};

export default sendMessage;
