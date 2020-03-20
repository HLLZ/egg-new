'use strict';
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize; // 获取数据类型
  const User = app.model.define(
    'user',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      nickName: { type: STRING, allowNull: false },
      openid: { type: STRING, allowNull: false },
    },
    {
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: false,
    }
  );
  return User;
};
