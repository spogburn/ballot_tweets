# Galvanize Group Project Proposal

## Group Members

- Kristen F-M
- Stephanie Ogburn


## Project Description

- A mapping application that displays tweets about a user-selected ballot initiative on a map.
- Tweets about the initiative are displayed in real time alongside the map.
  optional/stretch - tweets are color coded according to positive/negative reactions to said initiative.

## Who uses it?

- Citizens/people interested in politics/local issues

## What outputs do they need?

- map
- tweets filtered by a search

## What inputs are needed to generate those outputs?

- ballot initiative (as a search term or set of search terms)
- user location
- tweet locations

## What technologies do you plan to use?

- computers and the Internet
- ajax
- javascript
- bootstrap
- css
- html
- Postgres // postGIS??
- node
  - body-parser
  - socket.io (maybe or some kind of socket connection)
  - express
  - knex
- google maps???


## Feature list
- Ability to choose state and ballot measure
- Display map of tweets
  - map displays a certain max number of tweets probably bounded by some sort of time period.
- Filter tweets by location data (coordinates) and ballot measures
- display tweets about ballot measures
- Stretch - filter tweet locations by location string data
- Stretch - analyze tweets by sentiment (positive/negative)
