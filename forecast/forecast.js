const request = require("request");
const { skyKey } = require("../api.js");

const getWeather = (lat, lng, cb) => {
  request(
    {
      url: `https://api.darksky.net/forecast/${skyKey}/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      cb(
        error || response.statusCode !== 200
          ? "Unable to connect to forecast.io"
          : {
              temperature: body.currently.temperature,
              apparentTemperature: body.currently.apparentTemperature
            }
      );
    }
  );
};

module.exports = {
  getWeather
};
