'use strict';

const Controller = require('egg').Controller;

class SeasonController extends Controller {
  // 查询季节
  async getSeason() {
    const result = await this.ctx.model.Season.findAll();
    this.ctx.body = { result };
  }
}

module.exports = SeasonController;
