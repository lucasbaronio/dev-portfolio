import { buildMessage, buildTrackVisitBlocksMsg } from '../providers/slack.js';
import getIpInfo from '../services/ipInfo.js';
import sendMessage from '../services/sendMessageToSlack.js';
import { IS_NOT_FIRST_VISIT } from '../utils/session/constants.js';

const trackVisit = async (req, res, next) => {
  try {
    const isLocal = process.env.NODE_ENV === 'development';
    const isNotFirstVisit = req.session[IS_NOT_FIRST_VISIT];
    const userAgent = req.headers['user-agent'];

    if (!isNotFirstVisit && !isLocal && !userAgent.startsWith('curl')) {
      const clientIp = req.ip || req.headers['x-forwarded-for']?.split(',')[0];
      const ipInfo = await getIpInfo(clientIp);
      if (!ipInfo) throw new Error();

      const referer = req.headers['referer'] || req.headers['referrer'];
      const language = req.headers['accept-language'];

      const titleMessage = 'Nueva visita en DevPortfolio!';
      const buildBlocks = buildTrackVisitBlocksMsg(titleMessage, {
        ...ipInfo,
        userAgent,
        referer,
        language,
      });
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
