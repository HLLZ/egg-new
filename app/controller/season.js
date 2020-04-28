'use strict';

const Controller = require('egg').Controller;

class SeasonController extends Controller {
  // 查询季节
  async getSeason() {
    const queryObj = this.ctx.query;
    console.log('queryObj', queryObj);
    const where = {};
    if (queryObj.id) {
      where.id = queryObj.id;
    }
    const result = await this.ctx.model.Season.findAll({ where });
    this.ctx.body = { result };
  }
}

module.exports = SeasonController;
