export const buildTrackVisitBlocksMsg = (
  title,
  { ip, city, country, timezone, loc, userAgent, referer, language },
) => {
  return [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: title,
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*City:*\n${city}, ${country}`,
        },
        {
          type: 'mrkdwn',
          text: `*IP:*\n${ip}`,
        },
        {
          type: 'mrkdwn',
          text: `*Timezone:*\n${timezone}`,
        },
        {
          type: 'mrkdwn',
          text: `*Location:*\n${loc}`,
        },
        {
          type: 'mrkdwn',
          text: `*Referer:*\n${referer}`,
        },
        {
          type: 'mrkdwn',
          text: `*Lenguaje:*\n${language}`,
        },
        {
          type: 'mrkdwn',
          text: `*UserAgent:*\n${userAgent}`,
        },
      ],
    },
  ];
};

export const buildMessage = (title, buildBlocks) => {
  return {
    message: title,
    blocks: buildBlocks,
  };
};
