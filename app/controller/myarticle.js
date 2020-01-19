'use strict';

const Controller = require('egg').Controller;

class MyarticalController extends Controller {
  async getMyArticle() {
    const result = await this.app.model.Myarticle.findAll();
    this.ctx.body = { result };
  }
  async createMyArticle() {
    const result = await this.app.model.Myarticle.create({
      title: '养生普及小知识',
      subtitle: '知识普及',
      name: '胡乐乐',
      text: '尽快发给大家看塞伦盖蒂康师傅尽快尽快改善的sfhjadfkadshjfkajdsfh复活节看到是否会开始减肥空间离开结果打开了法国离开家高大上了ngfdkglj 法国',
    });
    this.ctx.body = { result };
  }
}

module.exports = MyarticalController;
