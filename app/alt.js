var Alt = require("alt");
var alt = new Alt();

// debug
alt.dispatcher.register(console.log.bind(console));

module.exports = alt;
