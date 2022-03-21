import { Controller } from "egg";

export default class UserController extends Controller {
    public async index() {
        const { ctx } = this;

        const firstUser = await ctx.repo.User.find();
        ctx.body = firstUser;
    }

}