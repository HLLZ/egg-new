'use strict';
module.exports = app => {
  const { STRING, INTEGER, TEXT, DATE } = app.Sequelize; // 获取数据类型
  const Article = app.model.define(
    'article',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: STRING, allowNull: false },
      subtitle: { type: STRING, allowNull: false },
      text: { type: TEXT, allowNull: false },
      name: { type: STRING, allowNull: false },
      openid: { type: STRING, allowNull: false },
      status: { type: INTEGER, allowNull: false },
      createdAt: { type: DATE, defaultValue: app.Sequelize.NOW },
    },
    {
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: false,
    }
  );
  return Article;
};

/*
  defaultValue 设置默认  Boolean
  allowNull 是否允许为空 Boolean
  unique 属性用来创建一个唯一约束. Boolean | string
  primaryKey 用于定义主键.  Boolean
  autoIncrement 可用于创建自增的整数列 Boolean
  comment 注释   string;
  references: {
    // 这是引用另一个模型
    model: Bar,

    // 这是引用模型的列名称
    key: 'id',

    // 这声明什么时候检查外键约束. 仅限PostgreSQL.
    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  }
*/
