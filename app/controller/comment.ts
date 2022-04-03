import { Controller } from 'egg';

export default class CommentController extends Controller {
    public async find() {
        const { ctx } = this;
        const { gid } = ctx.request.body;
        const data = await ctx.service.commentService.find(gid);
        ctx.body = data;
    }
    public async add() {
        const { ctx } = this;
        const { gid, uid, content } = ctx.request.body;
        const data = await ctx.service.commentService.add(gid, uid, content);
        ctx.body = data;
    }
    public async delete() {
        const { ctx } = this;
        const { cid } = ctx.request.body;
        const data = await ctx.service.commentService.delete(cid);
        ctx.body = data;
    }
}