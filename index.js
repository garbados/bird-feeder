'use strict'

const express = require('express')
const FeedParser = require('feedparser')
const request = require('request')

function getFeed (feedurl) {
  const feedparser = new FeedParser({ feedurl })
  const req = request(feedurl)
  return new Promise((resolve, reject) => {
    req.on('error', reject)
    req.on('response', function (res) {
      this.pipe(feedparser)
    })
    feedparser.on('error', reject)
    feedparser.on('readable', function () {
      resolve(this)
    })
  })
}

function concatFeeds (feedUrls, limit = 20) {
  let feedItems = []
  return feedUrls.map((url) => {
    return () => {
      return getFeed(url).then((feed) => {
        let items = []
        let item
        do {
          item = feed.read()
          if (item) items.push(item)
        } while (item && (items.length < limit))
        return items
      }).then((items) => {
        feedItems = feedItems.concat(items)
      })
    }
  }).reduce((a, b) => {
    return a.then(b)
  }, Promise.resolve()).then(() => {
    return feedItems.sort(function (a, b) {
      return (a.pubDate > b.pubDate) ? -1 : 1
    })
  })
}

function feedServer ({ name, description, feedUrls }) {
  const app = express()
  // settings
  app.set('views', './templates')
  app.set('view engine', 'pug')
  // routes
  app.get('/', function (req, res) {
    concatFeeds(feedUrls).then((items) => {
      res.render('index', { name, description, items })
    })
  })
  return app
}

module.exports = {
  concatFeeds,
  feedServer,
  getFeed
}
