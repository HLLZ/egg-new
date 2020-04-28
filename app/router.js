'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // 同步数据库
  app.beforeStart(async () => {
    await app.model.sync({ alter: true });
  });
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
  // router.get('/newslist/:id', controller.news.newslist);
  router.get('/getArticle', controller.article.getArticle);
  router.post('/createArticle', controller.article.createArticle);
  router.get('/createMedicine', controller.medicine.createMedicine);
  router.get('/getMedicine', controller.medicine.getMedicine);
  router.get('/createBanner', controller.banner.createBanner);
  router.get('/getBanner', controller.banner.getBanner);
  router.get('/getNews', controller.news.getNews);
  router.get('/getSeason', controller.season.getSeason);
  router.get('/getTabs', controller.tabs.getTabs);
  router.get('/getTabpans', controller.tabpans.getTabpans);
  router.post('/setUser', controller.user.setUser);
  router.get('/getCommit', controller.commit.getCommit);
  router.post('/setCommit', controller.commit.setCommit);
  // 后台
  // router.post('/setAdmin', controller.admin.setAdmin);
  router.post('/Login', controller.admin.login);
  router.post('/checkArticle', controller.article.checkArticle);
  router.post('/deleteArticle', controller.article.deleteArticle);
  router.post('/createNews', controller.news.createNews);
  router.post('/deleteNews', controller.news.deleteNews);
  router.post('/updateNews', controller.news.updateNews);
  router.post('/deleteMedicine', controller.medicine.deleteMedicine);
  router.post('/createMedicine', controller.medicine.createMedicine);
};
