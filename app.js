//command line based weather app

const weather = require('./weather.js');

const query = process.argv.slice(2).join(' ');
weather.get(query);