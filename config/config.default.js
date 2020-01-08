/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578290066360_1264';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 数据库配置
  config.sequelize = {
    dialect: 'mysql',
    database: 'hll',
    username: 'root',
    password: '12345678',
    host: 'localhost',
    define: {
      // 使用自定义的表名
      freezeTableName: true,
      // 自动生成时间戳 -小驼峰式
      timestamps: true,
      // 表名小驼峰
      underscored: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
