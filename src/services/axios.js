import axios from 'axios';

let instance = null;

function isNetworkError(error) {
  return (
    !error.response &&
    Boolean(error.code) && // Prevents retrying cancelled requests
    error.code !== 'ECONNABORTED' // Prevents retrying timed out requests
  );
}

function errorResponseHandler(error) {
  try {
    const { message } = error;
    const data = error.response?.data || {};
    const url = error.config?.url;
    const status = error.response?.status;

    if (isNetworkError(error)) {
      console.error('Network errors');
    }

    const dataToLog = JSON.stringify({
      status,
      url,
      message,
      data,
    });

    console.error(`[AXIOS_ERROR_INTERCEPTOR] ${dataToLog}`);

    return Promise.reject(error);
  } catch {
    return Promise.reject(error);
  }
}

const errorInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.response.use((response) => response, errorResponseHandler);
};

export const initialize = (props) => {
  instance = (props && axios.create(props)) || axios.create();
  errorInterceptor(instance);
  return instance;
};

const getInstance = (props) => instance || initialize(props);

export default getInstance;
