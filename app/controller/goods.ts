import { Controller } from 'egg';
import Goods from '../entity/goods';

export default class GoodsController extends Controller {

    public async search() {
        const { ctx } = this;
        const { current, pageSize, keywords, type } = ctx.request.body;
        const data = await ctx.service.goodsService.search(current, pageSize, keywords, type);
        ctx.body = data;
    }
    public async find() {
        const { ctx } = this;
        const { uid } = ctx.request.body;
        const data = await ctx.service.goodsService.find(uid);
        ctx.body = data;
    }
    public async add() {
        const { ctx } = this;
        const { uid, name, price, type, img, count, note, tradingPlace } = ctx.request.body;
        const data = await ctx.service.goodsService.add(uid, name, price, type, img, count, note, tradingPlace);
        ctx.body = data;
    }
    public async delete() {
        const { ctx } = this;
        const { gid } = ctx.request.body;
        const data = await ctx.service.goodsService.delete(gid);
        ctx.body = data;
    }
    public async save() {
        const { ctx } = this;
        const goods = ctx.request.body as Goods;
        const data = await ctx.service.goodsService.save(goods);
        ctx.body = data;
    }
    public async getGood() {
        const { ctx } = this;
        const { gid } = ctx.request.body;
        const data = await ctx.service.goodsService.getGood(gid);
        ctx.body = data;
    }
    public async shelvesGoods() {
        const { ctx } = this;
        const { gid, status } = ctx.request.body;
        const data = await ctx.service.goodsService.shelvesGoods(gid, status);
        ctx.body = data;
    }
    public async findAll() {
        const { ctx } = this;
        const data = await ctx.service.goodsService.findAll();
        ctx.body = data;
    }
}