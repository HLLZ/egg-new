'use strict';

const Controller = require('egg').Controller;

class MedicineController extends Controller {
  async createMedicine() {
    const result = await this.ctx.model.Medicine.create({
      title: '养生普及小知识',
      subtitle: '知识普及',
      image_path: 'qweqwrwre',
      text: '尽快发给大家看塞伦盖蒂康师傅尽快尽快改善的sfhjadfkadshjfkajdsfh复活节看到是否会开始减肥空间离开结果打开了法国离开家高大上了ngfdkglj 法国',
    });
    this.ctx.body = { result };
  }
  async getMedicine() {
    const queryObj = this.ctx.query;
    const where = {};
    if (queryObj.id) {
      where.id = queryObj.id;
    }
    console.log('queryObj', queryObj);
    const result = await this.ctx.model.Medicine.findAll({ where });
    this.ctx.body = { result };
  }
}

module.exports = MedicineController;
