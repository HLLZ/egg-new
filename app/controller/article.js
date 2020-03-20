'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  // 创建新文章
  async createArticle() {
    const queryObj = this.ctx.request.body;
    const result = await this.ctx.model.Article.create({
      title: queryObj.title,
      subtitle: queryObj.subtitle,
      text: queryObj.text,
      name: queryObj.name,
      openid: queryObj.openid,
    });
    this.ctx.body = { result };
  }
  // 查询文章
  async getArticle() {
    const queryObj = this.ctx.query;
    console.log('queryObj', queryObj);
    const where = {};
    const pagination = { pageSize: 10, current: 1 };
    // 每页显示数量
    if (queryObj.pageSize) {
      pagination.pageSize = Number(queryObj.pageSize);
    }
    // 当前页数
    if (queryObj.current) {
      pagination.current = queryObj.current;
    }
    if (queryObj.id) {
      where.id = queryObj.id;
    }
    if (queryObj.openid) {
      where.openid = queryObj.openid;
    }
    const count = await this.app.model.Article.count({ where });
    const result = await this.ctx.model.Article.findAll({
      where,
      offset: (pagination.current - 1) * pagination.pageSize,
      limit: pagination.pageSize,
      order: [[ 'createdAt', 'DESC' ]],
    });
    this.ctx.body = {
      result,
      pagination: {
        total: count,
        pageSize: pagination.pageSize,
        current: pagination.current,
      },
    };
  }
}

module.exports = ArticleController;
