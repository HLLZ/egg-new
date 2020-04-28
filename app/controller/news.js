'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {

  // 创建新闻
  async createNews() {
    const queryObj = this.ctx.request.body;
    const result = await this.ctx.model.News.create({
      title: queryObj.title,
      subtitle: queryObj.subtitle,
      text: queryObj.text,
      image: queryObj.image,
    });
    this.ctx.body = { result, state: 'success', msg: '新增成功' };
  }

  // 删除新闻
  async deleteNews() {
    const queryObj = this.ctx.request.body;
    const where = {};
    if (queryObj.id) {
      where.id = queryObj.id;
    }
    await this.ctx.model.News.destroy({ where });
    this.ctx.body = { state: 'success', msg: '删除成功' };
  }

  // 查询新闻
  async getNews() {
    const queryObj = this.ctx.query;
    console.log('queryObj', queryObj);
    const where = {};
    const pagination = { current: 1, pageSize: 10 };
    // 每页显示数量
    if (queryObj.pageSize) {
      pagination.pageSize = Number(queryObj.pageSize);
    }
    // 当前页数
    if (queryObj.current) {
      pagination.current = queryObj.current;
    }
    if (queryObj.kewWords) {
      where.title = queryObj.kewWords;
    }
    if (queryObj.id) {
      where.id = queryObj.id;
    }
    const count = await this.app.model.News.count({ where });
    const result = await this.ctx.model.News.findAll({
      where,
      offset: (pagination.current - 1) * pagination.pageSize,
      limit: pagination.pageSize,
      order: [[ 'createdAt', 'DESC' ]],
    });
    this.ctx.body = {
      state: 'success',
      result,
      pagination: {
        total: count,
        pageSize: pagination.pageSize,
        current: pagination.current,
      },
    };
  }
  // 修改新闻
  async updateNews() {
    const queryObj = this.ctx.request.body;
    // eslint-disable-next-line eqeqeq
    const where = {};
    if (queryObj.id) {
      where.id = queryObj.id;
    }
    const result = await this.ctx.model.News.findOne({ where });
    if (result) {
      const result = await this.app.model.News.update(
        {
          title: queryObj.title,
          subtitle: queryObj.subtitle,
          text: queryObj.text,
          image: queryObj.image,
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
  }
}

module.exports = NewsController;
