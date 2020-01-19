'use strict';

const Controller = require('egg').Controller;

class MedicineController extends Controller {
  async createMedicine() {
    const result = await this.ctx.model.Medicine.create({
      title: '养生普及小知识',
      subtitle: '知识普及',
      image_path: 'http://i2.tiimg.com/707670/df80e63c89b6c214.jpg',
      text: '尽快发给大家看塞伦盖蒂康师傅尽快尽快改善的sfhjadfkadshjfkajdsfh复活节看到是否会开始减肥空间离开结果打开了法国离开家高大上了ngfdkglj 法国',
    });
    this.ctx.body = { result };
  }
  async getMedicine() {
    const queryObj = this.ctx.query;
    const where = {};
    const pagination = { pageSize: 10, current: 1 };
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
    console.log('queryObj', queryObj);
    const count = await this.app.model.Medicine.count({ where });
    const result = await this.ctx.model.Medicine.findAll({
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

module.exports = MedicineController;
