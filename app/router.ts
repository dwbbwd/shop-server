import { Application } from 'egg';
// import TokenCheck from './middleware/token-check';

export default (app: Application) => {
  const { controller, router } = app;
  router.post('/admin/list', controller.user.index);
  // user
  router.post('/user/phoneLogin', controller.user.phoneLogin);
  router.post('/user/emailLogin', controller.user.emailLogin);
  router.post('/user/register', controller.user.register);
  router.post('/user/modify', controller.user.modify);
  router.post('/user/getUser', controller.user.getUser);
  // goods
  router.post('/goods/search', controller.goods.search);
};
