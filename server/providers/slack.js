export const buildTrackVisitBlocksMsg = (title, { ip, city, country, timezone, loc }) => {
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
