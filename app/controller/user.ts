import { Controller } from "egg";

export default class UserController extends Controller {
    public async index() {
        const { ctx } = this;

        const firstUser = await ctx.repo.User.find();
        ctx.body = firstUser;
    }
    public login() {
        const { account, password } = this.ctx.request.body;
        const data = this.service.userService.login(account, password);
        this.ctx.body = data;
    }
}