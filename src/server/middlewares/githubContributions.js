import { getGithubContributions } from '../services/getGithubContributions.js';
import { GITHUB_CONTRIBUTIONS } from '../utils/session/constants.js';

const githubContributions = async (req, res, next) => {
  try {
    const githubContributions = req.session[GITHUB_CONTRIBUTIONS];

    if (!githubContributions) {
      const githubContributions = await getGithubContributions('lbaronio');
      req.session[GITHUB_CONTRIBUTIONS] = githubContributions;
    }
    next();
  } catch (error) {
    next();
  }
};

export default githubContributions;
