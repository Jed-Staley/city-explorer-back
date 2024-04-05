const callAPI = require('./api-call');

const handleWeather = () => {
  callAPI('/api/weather', (city) => `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${weatherAPIkey}&days=7`, (parsedData) => {
    let returnArr = []
    for (let i = 0; i < parsedData.data.length; i++) {
      returnArr.push({ date: parsedData.data[i].datetime, description: parsedData.data[i].weather.description });
    }
    return returnArr;
  })
}

module.exports = handleWeather;
