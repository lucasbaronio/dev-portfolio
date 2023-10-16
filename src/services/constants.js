const SLACK_NOTIFIER_DOMAIN = import.meta.env.VITE_SLACK_URL;

export const URLS = {
  SEND_MESSAGE: `${SLACK_NOTIFIER_DOMAIN}/send-slack/{0}`,
};

export const SLACK_CHANNEL = import.meta.env.VITE_SLACK_CHANNEL_ID;
