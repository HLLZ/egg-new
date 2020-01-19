'use strict';
module.exports = app => {
  const { STRING, INTEGER, TEXT, DATE } = app.Sequelize; // 获取数据类型
  const Myarticle = app.model.define(
    'myarticle',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: STRING, allowNull: false },
      subtitle: { type: STRING },
      name: { type: STRING, allowNull: false },
      text: { type: TEXT, allowNull: false },
      createdAt: { type: DATE, defaultValue: app.Sequelize.NOW },
    },
    {
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: false,
    }
  );
  return Myarticle;
};
