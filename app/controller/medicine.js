'use strict';

const Controller = require('egg').Controller;

class MedicineController extends Controller {
  // 新增药材
  async createMedicine() {
    const queryObj = this.ctx.request.body;
    const result = await this.ctx.model.Medicine.create({
      title: queryObj.title,
      subtitle: queryObj.subtitle,
      text: queryObj.text,
      image_path: queryObj.image,
    });
    this.ctx.body = { result, state: 'success', msg: '新增成功' };
  }

  // 删除药材
  async deleteMedicine() {
    const queryObj = this.ctx.request.body;
    const where = {};
    if (queryObj.id) {
      where.id = queryObj.id;
    }
    await this.ctx.model.Medicine.destroy({ where });
    this.ctx.body = { state: 'success', msg: '删除成功' };
  }

  // 查询药材
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
    if (queryObj.keyword) {
      where.title = queryObj.keyword;
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
      state: 'success',
    };
  }
}

module.exports = MedicineController;
