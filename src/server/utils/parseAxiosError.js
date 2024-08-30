const parseAxiosError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const { data, status } = error.response;
    return { status, message: JSON.stringify(data) };
  }
  // The request was made but no response was received
  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  // http.ClientRequest in node.js
  if (error.request) {
    const errorMessage =
      error?.request?.responseText || error?.message || 'error making the request';
    const statusError = error?.request?.status || error?.status || 500;
    return { status: statusError, message: errorMessage };
  }

  // Something happened in setting up the request that triggered an Error
  const errorMessage = error?.message || 'error setting up the request';
  const statusError = error?.status || 500;
  return { status: statusError, message: errorMessage };
};

export default parseAxiosError;
