import { Application } from 'egg';

export default class AppBootHook {
  app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  // async didLoad() {
  // }
}
