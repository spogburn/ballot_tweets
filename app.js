'use strict';


require('dotenv').config({silent:true});
var express = require('express');
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_KEY,
  access_token_secret: process.env.TWITTER_SECRET
});


var stream = client.stream('statuses/filter', {track: 'guns'});
stream.on('data', function(tweet) {
  console.log(tweet.text);
});

stream.on('error', function(error) {
  throw error;
});
