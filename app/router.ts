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
  router.post('/user/userCard', controller.user.getCard);
  // goods
  router.post('/goods/search', controller.goods.search);
  router.post('/goods/find', controller.goods.find);
  router.post('/goods/add', controller.goods.add);
  router.post('/goods/delete', controller.goods.delete);
  router.post('/goods/save', controller.goods.save);
  router.post('/goods/getGood', controller.goods.getGood);
  // order
  router.post('/order/add', controller.order.add);
  router.post('/order/findAll', controller.order.findAll);
  router.post('/order/delete', controller.order.delete);
  router.post('/order/search', controller.order.search);
  router.post('/order/pay', controller.order.payOrder);
  router.post('/order/complete', controller.order.completeOrder);
  router.post('/order/save', controller.order.save);
  // cart
  router.post('/cart/add', controller.cart.add);
  router.post('/cart/find', controller.cart.find);
  router.post('/cart/delete', controller.cart.delete);
  router.post('/cart/update', controller.cart.update);
  // classify
  router.post('/classify/find', controller.classify.find);
  router.post('/classify/add', controller.classify.add);
  router.post('/classify/delete', controller.classify.delete);
  router.post('/classify/update', controller.classify.update);
  // comment
  router.post('/comment/add', controller.comment.add);
  router.post('/comment/find', controller.comment.find);
  router.post('/comment/delete', controller.comment.delete);
  // message
  router.post('/message/add', controller.message.add);
  router.post('/message/find', controller.message.findLimit);
  router.post('/message/delete', controller.message.delete);


};
