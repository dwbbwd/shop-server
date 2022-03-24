import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/user/list', controller.user.index);
  router.get('/user/login', controller.user.login);
};
