import { Agent } from 'egg';

export default class AppBootHook {
  agent: Agent;

  constructor(agent: Agent) {
    this.agent = agent;
  }

  async didLoad() {    
  }
}
