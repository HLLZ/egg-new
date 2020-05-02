'use strict';

const Controller = require('egg').Controller;

class TabpansController extends Controller {
  async getTabpans() {
    const queryObj = this.ctx.query;
    const where = {};
    if (queryObj.kewWords) {
      where.videoid = queryObj.kewWords;
    }
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
      state: 'success',
    };
  }

  // 创建视频
  async createVideo() {
    const queryObj = this.ctx.request.body;
    const result = await this.ctx.model.Tabpans.create({
      title: queryObj.title,
      video_path: queryObj.video_path,
      tabid: queryObj.tabid,
      videoid: queryObj.videoid,
    });
    this.ctx.body = { result, state: 'success', msg: '新增成功' };
  }

  // 删除视频
  async deleteVideo() {
    const queryObj = this.ctx.request.body;
    const where = {};
    if (queryObj.videoid) {
      where.videoid = queryObj.videoid;
    }
    await this.ctx.model.Tabpans.destroy({ where });
    this.ctx.body = { state: 'success', msg: '删除成功' };
  }
}

module.exports = TabpansController;
