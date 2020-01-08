'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async test() {
    const result = await this.app.model.Test.create({
      id: 3,
      name: '123',
      phone1: '123',
    });
    this.ctx.body = { result };
  }
  async Info() {
    const result = await this.ctx.model.Test.findAll();
    this.ctx.body = { result };
  }
}

module.exports = TestController;
