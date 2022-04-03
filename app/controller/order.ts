import { Controller } from 'egg';
import Order from '../entity/order';

export default class OrderController extends Controller {
    public async add() {
        const { ctx } = this;
        const { orders } = ctx.request.body;
        const data = await ctx.service.orderService.add(orders);
        ctx.body = data;
    }
    public async findAll() {
        const { ctx } = this;
        const { uid } = ctx.request.body;
        const data = await ctx.service.orderService.findAll(uid);
        ctx.body = data;
    }
    public async delete() {
        const { ctx } = this;
        const { oid } = ctx.request.body;
        const data = await ctx.service.orderService.delete(oid);
        ctx.body = data;
    }
    public async search() {
        const { ctx } = this;
        const { uid, keyword, pageSize, pageCurrent } = ctx.request.body;
        const data = await ctx.service.orderService.search(uid, keyword, pageSize, pageCurrent);
        ctx.body = data;
    }
    public async payOrder() {
        const { ctx } = this;
        const { oid } = ctx.request.body;
        const data = await ctx.service.orderService.payOrder(oid);
        ctx.body = data;
    }
    public async completeOrder() {
        const { ctx } = this;
        const { oid } = ctx.request.body;
        const data = await ctx.service.orderService.completeOrder(oid);
        ctx.body = data;
    }
    public async save() {
        const { ctx } = this;
        const order = ctx.request.body as Order;
        const data = await ctx.service.orderService.save(order);
        ctx.body = data;
    }
}