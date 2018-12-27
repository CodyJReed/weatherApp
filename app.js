const request = require("request");

const google = require("./api.js");

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=2131%20woodrow%20drive%20knoxville&key=${
      google.default
    }`,
    json: true
  },
  (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
  }
);
