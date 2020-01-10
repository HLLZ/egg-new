'use strict';

const Controller = require('egg').Controller;

class BannerController extends Controller {
  async createBanner() {
    const result = await this.ctx.model.Banner.create({
      title: '中药品鉴3',
      image_path: 'http://i1.fuimg.com/707670/fe765d84768a4e4e.jpg',
    });
    this.ctx.body = { result };
  }
  async getBanner() {
    const result = await this.ctx.model.Banner.findAll();
    this.ctx.body = { result };
  }
}

module.exports = BannerController;
