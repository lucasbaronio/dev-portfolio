import { buildMessage, buildTrackVisitBlocksMsg } from '../providers/slack.js';
import getIpInfo from '../services/ipInfo.js';
import sendMessage from '../services/sendMessageToSlack.js';
import { IS_NOT_FIRST_VISIT } from '../utils/session/constants.js';

const trackVisit = async (req, res, next) => {
  try {
    const isLocal = process.env.NODE_ENV === 'development';
    const isNotFirstVisit = req.session[IS_NOT_FIRST_VISIT];

    if (!isNotFirstVisit && !isLocal) {
      const clientIp = req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress;
      console.log(`ip: ${clientIp}`);
      const ipInfo = await getIpInfo(clientIp);
      if (!ipInfo) throw new Error();

      const titleMessage = 'Nueva visita en DevPortfolio!';
      const buildBlocks = buildTrackVisitBlocksMsg(titleMessage, { ...ipInfo });
      const message = buildMessage(titleMessage, buildBlocks);

      await sendMessage(message);
      req.session[IS_NOT_FIRST_VISIT] = true;
    }
    next();
  } catch (error) {
    req.session[IS_NOT_FIRST_VISIT] = true;
    next();
  }
};

export default trackVisit;
