'use strict';

const Controller = require('egg').Controller;

class CommitController extends Controller {
  // 查询评论
  async getCommit() {
    const queryObj = this.ctx.query;
    const where = {};
    if (queryObj.parent_id) {
      where.parent_id = queryObj.parent_id;
    }
    const result = await this.ctx.model.Commit.findAll({
      where,
      order: [[ 'createdAt', 'DESC' ]],
    });
    this.ctx.body = { result };
  }
  async setCommit() {
    const queryObj = this.ctx.request.body;
    const result = await this.ctx.model.Commit.create({
      parent_id: queryObj.parent_id,
      nickName: queryObj.nickName,
      text: queryObj.text,
    });
    this.ctx.body = { result };
  }
}

module.exports = CommitController;
