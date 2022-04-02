import { Service } from 'egg';
import { IClassifyService } from '../contract';
import classify from '../entity/classify';
import { enum_ } from '../utils';
import Common from '../utils/common';
import { Result } from '../utils/vo';

export default class ClassifyService extends Service implements IClassifyService {

    private common: Common = new Common();

    // 获取所有分类
    public async findAll() {
        const data = await this.ctx.repo.Classify.find();
        return this.common.success(enum_.ErrorCode.success, data);
    }

    public async add(type: classify): Promise<Result> {
        await this.ctx.repo.Classify.save(type);
        return this.common.success(enum_.ErrorCode.success, null);
    }
    public async delete(id: number): Promise<Result> {
        await this.ctx.repo.Classify.delete({ id: id });
        return this.common.success(enum_.ErrorCode.success, null);
    }
    public async update(type: classify): Promise<Result> {
        await this.ctx.repo.Classify.save(type);
        return this.common.success(enum_.ErrorCode.success, null);
    }
}