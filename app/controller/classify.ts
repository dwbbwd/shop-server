import { Controller } from 'egg';
import Classify from '../entity/classify';

export default class ClassifyController extends Controller {

    public async find() {
        const data = await this.ctx.service.classifyService.findAll();
        this.ctx.body = data;
    }
    public async add() {
        const type = this.ctx.request.body as Classify;
        const data = await this.ctx.service.classifyService.add(type);
        this.ctx.body = data;
    }
    public async delete() {
        const { id } = this.ctx.request.body;
        const data = await this.ctx.service.classifyService.delete(id);
        this.ctx.body = data;
    }
    public async update() {
        const type = this.ctx.request.body as Classify;
        const data = await this.ctx.service.classifyService.update(type);
        this.ctx.body = data;
    }
}