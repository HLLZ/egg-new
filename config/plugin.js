'use strict';

// /** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

// ejs 插件
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

// sequelize 插件
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

// mysql 插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};
