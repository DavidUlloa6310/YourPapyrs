export function getLink() {
  let apiURL;
  if (process.env.REACT_APP_DEVELOPMENT) {
    apiURL = `${process.env.REACT_APP_LOCALHOST_URL}/api/v1`;
  } else {
    apiURL = `${process.env.REACT_APP_PRODUCTION_URL}/api/v1`;
  }

  return apiURL;
}
