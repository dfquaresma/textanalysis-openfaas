"use strict"

let now = require('nano-time');
var Sentiment = require('sentiment');

module.exports = function(req) {
    var before = now();
    var sentiment = new Sentiment();
    console.log(process.env.text_to_analysis);
    sentiment.analyze(process.env.text_to_analysis);
    var after = now();
    return (after - before).toString();
}
