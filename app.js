//command line based weather app written in node

const weather = require('./weather.js');

const query = process.argv.slice(2).join(' ');
weather.get(query);