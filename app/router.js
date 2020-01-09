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
  // router.get('/newslist/:id', controller.news.newslist);
  router.get('/findArticle', controller.article.findArticle);
  router.get('/createArticle', controller.article.createArticle);
  router.get('/createMedicine', controller.medicine.createMedicine);
  router.get('/findMedicine', controller.medicine.findMedicine);
};
