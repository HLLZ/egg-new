'use strict';
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize; // 获取数据类型
  const Tabs = app.model.define(
    'tabs',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: STRING, allowNull: false },
      tabid: { type: INTEGER, allowNull: false },
    },
    {
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: false,
    }
  );
  return Tabs;
};
