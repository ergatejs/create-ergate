'use strict';

module.exports = {
  name: {
    desc: 'project_name',
  },
  description: {
    desc: 'project_description',
  },
  author: {
    desc: 'project_author',
  },
  keys: {
    desc: 'cookie security keys',
    default: Date.now() + '_' + random(100, 10000),
  },
};

function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}
