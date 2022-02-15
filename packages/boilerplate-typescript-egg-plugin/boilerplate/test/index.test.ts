import * as path from 'path';
import * as dotenv from 'dotenv';
import mm from 'egg-mock';

// import assert = require('assert');

dotenv.config({
  path: path.join(__dirname, '.env'),
  debug: true,
});

describe('test/index.test.ts', async () => {
  afterEach(mm.restore);

  describe('demo', () => {
    it('should return client config', async () => {
      const app = mm.app({ baseDir: 'demo' });
      await app.ready();

      // assert(app.{{name}});
    });
  });
});
