'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  // 创建新文章
  async createArticle() {
    const result = await this.app.model.Article.create({
      title: '养生普及小知识',
      subtitle: '知识普及',
      text: '尽快发给大家看塞伦盖蒂康师傅尽快尽快改善的sfhjadfkadshjfkajdsfh复活节看到是否会开始减肥空间离开结果打开了法国离开家高大上了ngfdkglj 法国',
      name: '胡乐乐',
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
