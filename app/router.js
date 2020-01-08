'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // 同步数据库
  app.beforeStart(async () => {
    await app.model.sync({ alter: true });
  });
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.index);
  router.get('/content', controller.news.content);
  router.get('/newslist/:id', controller.news.newslist);
  router.get('/test', controller.test.test);
  router.get('/Info', controller.test.Info);
};
