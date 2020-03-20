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
  router.get('/getArticle', controller.article.getArticle);
  router.post('/createArticle', controller.article.createArticle);
  router.get('/createMedicine', controller.medicine.createMedicine);
  router.get('/getMedicine', controller.medicine.getMedicine);
  router.get('/createBanner', controller.banner.createBanner);
  router.get('/getBanner', controller.banner.getBanner);
  router.get('/getMyArticle', controller.myarticle.getMyArticle);
  router.get('/createMyArticle', controller.myarticle.createMyArticle);
  router.get('/createNews', controller.news.createNews);
  router.get('/getNews', controller.news.getNews);
  router.get('/getSeason', controller.season.getSeason);
  router.post('/setUser', controller.user.setUser);
  router.get('/getCommit', controller.commit.getCommit);
  router.post('/setCommit', controller.commit.setCommit);
};
