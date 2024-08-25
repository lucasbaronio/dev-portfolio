import { IP_INFO_TOKEN } from '../constants/ipinfo.js';
import parseAxiosError from '../utils/parseAxiosError.js';

const getIpInfo = async (ip) => {
  try {
    const url = `https://ipinfo.io/${ip}?token=${IP_INFO_TOKEN}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) throw new Error(`Error on ipinfo: ${JSON.stringify(data)}`);
    if (data.bogon) {
      console.warn(`Problems when get ip information ${JSON.stringify(data)}`);
      return null;
    }
    return data;
  } catch (error) {
    console.error('[services][getIpInfo][ERROR]', parseAxiosError(error).message);
    throw error;
  }
};

export default getIpInfo;
