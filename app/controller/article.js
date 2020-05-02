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
      status: 2,
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
    if (queryObj.status) {
      where.status = queryObj.status;
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
      statu: 200,
    };
  }

  async deleteArticle() {
    const queryObj = this.ctx.request.body;
    const where = {};
    if (queryObj.id) {
      where.id = queryObj.id;
    }
    await this.ctx.model.Article.destroy({ where });
    this.ctx.body = { state: 'success', msg: '删除成功' };
  }

  async checkArticle() {
    const queryObj = this.ctx.request.body;
    console.log('queryObj', queryObj);
    // eslint-disable-next-line eqeqeq
    if (queryObj.status == 0 || queryObj.status == 1 || queryObj.status == 2) {
      const where = {};
      if (queryObj.id) {
        where.id = queryObj.id;
      }
      const result = await this.ctx.model.Article.findOne({ where });
      if (result) {
        const result = await this.app.model.Article.update(
          {
            status: queryObj.status,
          },
          {
            where: {
              id: queryObj.id,
            },
          }
        );
        this.ctx.body = {
          result,
          state: 'success',
          msg: '更改完成',
        };
      }
    } else {
      this.ctx.body = { state: 'fail', msg: '请传递正确的审核结果' };
    }
  }
}

module.exports = ArticleController;
