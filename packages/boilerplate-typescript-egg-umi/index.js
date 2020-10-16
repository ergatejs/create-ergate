'use strict';

module.exports = {
  name: {
    desc: 'project name',
    default: 'pluginName',
  },
  description: {
    desc: 'project description',
    default: 'awesome project for egg',
  },
  author: {
    desc: 'project author',
    default: 'Author <author@domain.com>',
  },
  keys: {
    desc: 'cookie security keys',
    default: Date.now() + '_' + random(100, 10000),
  },
};

function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}
