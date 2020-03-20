'use strict';
module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize; // 获取数据类型
  const Season = app.model.define(
    'season',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      season: { type: STRING, allowNull: false },
      text: { type: TEXT, allowNull: false },
      text1: { type: TEXT, allowNull: false },
      text2: { type: TEXT, allowNull: false },
      image: { type: STRING, allowNull: false },
      image_path: { type: STRING, allowNull: false },
    },
    {
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: false,
    }
  );
  return Season;
};
