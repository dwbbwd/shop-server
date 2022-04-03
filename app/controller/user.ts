import { Controller } from "egg";
import User from "../entity/user";

export default class UserController extends Controller {
    public async index() {
        const { ctx } = this;

        ctx.body = { data: '11' };
    }
    public async phoneLogin() {
        const { tel, password } = this.ctx.request.body;
        const data = await this.service.userService.phoneLogin(tel, password);
        this.ctx.body = data;
    }
    public async emailLogin() {
        const { email, password } = this.ctx.request.body;
        const data = await this.service.userService.emailLogin(email, password);
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
    public async getCard() {
        console.log(1)
        const { id } = this.ctx.request.body;
        console.log(id);

        const data = await this.service.userService.getCard(id);
        this.ctx.body = data;
    }
}