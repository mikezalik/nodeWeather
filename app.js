//command line based weather app

const weather = require('./weather.js');

const weatherRequest = process.argv.slice(2).join(' ');
weatherRequest.forEach(weather.get);

//query: 90201
//query: Los Angeles

weather.get(query);