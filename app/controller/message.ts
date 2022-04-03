import { Controller } from 'egg';

export default class MessageController extends Controller {
    public async findLimit() {
        const { ctx } = this;
        const { sid, rid } = ctx.request.body;
        const data = await ctx.service.messageService.findLimit(sid, rid);
        ctx.body = data;
    }
    public async add() {
        const { ctx } = this;
        const { sid, rid, content } = ctx.request.body;
        const data = await ctx.service.messageService.add(sid, rid, content);
        ctx.body = data;
    };
    public async delete() {
        const { ctx } = this;
        const { mid } = ctx.request.body;
        const data = await ctx.service.messageService.delete(mid);
        ctx.body = data;
    }

}