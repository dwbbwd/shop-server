import { Controller } from "egg";
import User from "../entity/user";

export default class UserController extends Controller {
    public async index() {
        const { ctx } = this;

        const firstUser = await ctx.repo.User.find();
        ctx.body = firstUser;
    }
    public async login() {
        const { account, password } = this.ctx.request.body;
        const data = await this.service.userService.login(account, password);
        this.ctx.body = data;
    }
    public async register() {
        const user = this.ctx.request.body as User;
        const data = await this.service.userService.register(user);
        this.ctx.body = data;

    }
    public async modify() {
        const user = this.ctx.request.body as User;
        const data = await this.service.userService.modify(user);
        this.ctx.body = data;
    }
    public async getUser() {
        const { id } = this.ctx.request.body;
        const data = await this.service.userService.getUser(id);
        this.ctx.body = data;
    }
}