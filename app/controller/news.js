'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async createNews() {
    const result = await this.app.model.News.create({
      title: '养生普及小知识',
      subtitle: '知识普及',
      text: '尽快发给大家看塞伦盖蒂康师傅尽快尽快改善的sfhjadfkadshjfkajdsfh复活节看到是否会开始减肥空间离开结果打开了法国离开家高大上了ngfdkglj 法国',
      image: 'http://i2.tiimg.com/707670/8a2cd46f47a5fc9d.jpg',
    });
    this.ctx.body = { result };
  }
  // 查询文章
  async getNews() {
    const result = await this.ctx.model.News.findAll();
    this.ctx.body = { result };
  }
}

module.exports = NewsController;
