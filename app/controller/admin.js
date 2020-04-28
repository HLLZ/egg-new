'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async setAdmin() {
    // let flag = true;
    const queryObj = this.ctx.request.body;
    // const result1 = await this.ctx.model.admin.findAll();
    // eslint-disable-next-line array-callback-return
    // result1.map(item => {
    //   if (queryObj.username === item.dataValues.username) {
    //     flag = false;
    //   } else {
    //     flag = true;
    //   }
    // });
    // if (flag) {
    const result = await this.ctx.model.Admin.create({
      username: queryObj.username,
      password: queryObj.password,
    });
    this.ctx.body = { result };
    // } else {
    //   this.ctx.body = {};
    // }
  }


  async login() {
    const { ctx, app } = this;
    // 接收参数
    const queryObj = this.ctx.request.body;
    // 判断账号密码是否为空
    if (!queryObj.username && !queryObj.password) {
      ctx.body = { msg: '格式错误' };
    } else {
      const result = await this.app.model.Admin.findOne({
        where: { username: queryObj.username },
      });
      // 判断账号是否存在
      if (result == null) {
        ctx.body = { state: 'fail', msg: '账号错误' };
      } else if (queryObj.password === result.dataValues.password) {
        // 生成 token
        const token = app.jwt.sign(
          {
            // 需要存储的 token 数据
            username: result.dataValues.username,
            password: result.dataValues.password,
          },
          app.config.jwt.secret
        );
        ctx.body = { state: 'success', msg: '登录成功', token };
      } else {
        ctx.body = { state: 'fail', msg: '密码错误' };
      }
    }
  }
}

module.exports = AdminController;
