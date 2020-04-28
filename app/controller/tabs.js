'use strict';

const Controller = require('egg').Controller;

class TabsController extends Controller {
  async getTabs() {
    const result = await this.ctx.model.Tabs.findAll();
    this.ctx.body = { result };
  }
}

module.exports = TabsController;
