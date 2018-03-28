#!/usr/bin/env node
'use strict'

const { feedServer } = require('.')
const { feedUrls } = require('./config.json')
const { name, description } = require('./package.json')

require('yargs')
  .command({
    command: '$0',
    aliases: ['start', 'serve'],
    description: 'Start the feed server',
    handler: function ({ port }) {
      const server = feedServer({
        description,
        feedUrls,
        name
      })
      server.listen(port, function () {
        console.log('Now listening on %i', port)
      })
    }
  })
  .option('port', {
    alias: 'p',
    description: 'Port for the server to listen on.',
    default: 3000
  })
  .alias('h', 'help')
  .parse()
