export function getLink() {
  let apiURL = "https://yourpapyrs.com/api/v1";
  // console.log(process.env.REACT_APP_PRODUCTION_URL);
  // if (process.env.REACT_APP_DEVELOPMENT) {
  //   apiURL = `${process.env.REACT_APP_LOCALHOST_URL}/api/v1`;
  // } else {
  //   apiURL = `${process.env.REACT_APP_PRODUCTION_URL}/api/v1`;
  // }
  return apiURL;
}
