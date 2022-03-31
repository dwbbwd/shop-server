import { Controller } from 'egg';

export default class GoodsController extends Controller {

    public async search() {
        const { ctx } = this;
        const { current, pageSize, keywords, type } = ctx.request.body;
        const data = await ctx.service.goodsService.search(current, pageSize, keywords, type);
        ctx.body = data;
    }
    public async
}