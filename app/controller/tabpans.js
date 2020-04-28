'use strict';

const Controller = require('egg').Controller;

class TabpansController extends Controller {
  async getTabpans() {
    const queryObj = this.ctx.query;
    const where = {};
    const pagination = { pageSize: 5, current: 1 };
    // 每页显示数量
    if (queryObj.pageSize) {
      pagination.pageSize = Number(queryObj.pageSize);
    }
    // 当前页数
    if (queryObj.current) {
      pagination.current = queryObj.current;
    }
    if (queryObj.tabid) {
      where.tabid = queryObj.tabid;
    }
    console.log('queryObj', queryObj);
    const count = await this.app.model.Tabpans.count({ where });
    const result = await this.ctx.model.Tabpans.findAll({
      where,
      offset: (pagination.current - 1) * pagination.pageSize,
      limit: pagination.pageSize });
    this.ctx.body = {
      result,
      pagination: {
        total: count,
        pageSize: pagination.pageSize,
        current: pagination.current,
      },
      statu: 200,
    };
  }
}

module.exports = TabpansController;
