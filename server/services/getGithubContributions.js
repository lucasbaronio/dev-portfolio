import parseAxiosError from '../../src/services/utils/parseAxiosError';

export const getGithubContributions = async (username) => {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    );
    const result = await response.json();
    return result?.total?.lastYear;
  } catch (error) {
    console.error('[SERVER][getGithubContributions][ERROR]', parseAxiosError(error).message);
  }
};
