'use strict';
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize; // 获取数据类型
  const Admin = app.model.define(
    'admin',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: STRING, allowNull: false },
      password: { type: STRING, allowNull: false },
    },
    {
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: false,
    }
  );
  return Admin;
};
