import { Controller } from 'egg';

export default class CartController extends Controller {
    public async add() {
        const { ctx } = this;
        const { uid, gid, num } = ctx.request.body;
        const data = await ctx.service.cartService.add(uid, gid, num);
        ctx.body = data;
    }
    public async find() {
        const { ctx } = this;
        const { uid, pageSize, pageCurrent } = ctx.request.body;
        const data = await ctx.service.cartService.find(uid, pageSize, pageCurrent);
        ctx.body = data;
    }
    public async delete() {
        const { ctx } = this;
        const { cids } = ctx.request.body;
        const data = await ctx.service.cartService.delete(cids);
        ctx.body = data;
    }
    public async update() {
        const { ctx } = this;
        const { carts } = ctx.request.body;

        const data = await ctx.service.cartService.update(carts);
        ctx.body = data;
    }

}