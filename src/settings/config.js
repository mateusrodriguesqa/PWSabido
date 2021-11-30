const environment = process.env.ENV.trim(); 

const env = require(`./environments/${environment}`);

module.exports = env;