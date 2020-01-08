'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {

    const msg = 'ejs';

    const list = await this.service.news.getNewsList();

    await this.ctx.render('news', {
      msg,
      list,
    });
  }

  async content() {

    // egg里获取get传值

    const query = this.ctx.query;

    console.log(query);

    this.ctx.body = '新闻详情';
  }
  async newslist() {

    // egg里获取动态传值

    const params = this.ctx.params;

    console.log(params);

    this.ctx.body = '新闻列表';
  }
}

module.exports = NewsController;
