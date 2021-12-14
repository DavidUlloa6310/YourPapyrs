export function getLink() {
  let apiURL;
  console.log(process.env.REACT_APP_DEVELOPMENT);
  if (process.env.REACT_APP_DEVELOPMENT) {
    apiURL = `${process.env.REACT_APP_LOCALHOST_URL}/api/v1`;
  } else {
    apiURL = `${process.env.REACT_APP_PRODUCTION_URL}/api/v1`;
  }

  console.log(apiURL);
  return apiURL;
}
