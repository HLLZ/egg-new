'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {
    // 调用服务中方法  注意异步
    const list = await this.service.news.getNewsList();

    await this.ctx.render('home', {
      list,
    });
  }
  async test() {
    const result = await this.app.model.Test.create({
      id: 2,
      name: '123',
      phone1: '123',
    });
    this.ctx.body = { result };
  }
  async news() {
    const { ctx } = this;
    ctx.body = 'hi, news';
  }
}

module.exports = HomeController;
