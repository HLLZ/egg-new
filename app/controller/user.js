'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async setUser() {
    let flag = true;
    const queryObj = this.ctx.request.body;
    const result1 = await this.ctx.model.User.findAll();
    // eslint-disable-next-line array-callback-return
    result1.map(item => {
      console.log('queryObj.openid', queryObj.openid);
      console.log('item.dataValues.openid', item.dataValues.openid);
      // eslint-disable-next-line eqeqeq
      if (queryObj.openid == item.dataValues.openid) {
        flag = false;
      }
    });
    if (flag) {
      const result = await this.ctx.model.User.create({
        nickName: queryObj.nickName,
        openid: queryObj.openid,
      });
      this.ctx.body = { result };
    } else {
      this.ctx.body = { };
    }
  }
}

module.exports = UserController;
