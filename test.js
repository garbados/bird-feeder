/* global describe, it */
'use strict'

const { concatFeeds, getFeed } = require('./index.js')

const feedUrls = [
  'http://feeds.arstechnica.com/arstechnica/index',
  'https://garbados.github.io/my-blog/rss.xml'
]

describe('bird-feeder', function () {
  it('getFeed', function () {
    return getFeed(feedUrls[0])
  })

  it('concatFeeds', function () {
    return concatFeeds(feedUrls)
  })
})
