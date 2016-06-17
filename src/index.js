import dude from 'debug-dude'
const { /*debug,*/ log, info /*, warn, error*/ } = dude('bot')

import { version } from '../package.json'
info(`NSA v${version} starting`)

import config from '../config.json'

import { connect, message } from 'coffea'
const networks = connect(config)

// --

networks.on('message', (evt, reply) => {
  log('Received message event: %o', evt)

  // TODO: collect message stats
})

networks.on('command', (evt, reply) => {
  log('Received command event: %o', evt)

  switch (evt.cmd) {
    case 'stats':
      reply(message(evt.channel, 'work in progress ;)')) // TODO
      break
  }
})
