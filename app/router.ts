import { Application } from 'egg';
// import TokenCheck from './middleware/token-check';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/user/list', controller.user.index);
  router.post('/user/login', controller.user.login);
  router.post('/user/register', controller.user.register);
  router.post('/user/modify', controller.user.modify);
  router.post('/user/getUser', controller.user.getUser);
};
