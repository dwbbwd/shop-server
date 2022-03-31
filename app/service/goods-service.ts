import { Service } from 'egg';
import { Like } from 'typeorm';
import Goods from '../entity/goods';
import { enum_ } from '../utils';
import Common from '../utils/common';
import { Result } from '../utils/vo';

export default class GoodsService extends Service {

    private common: Common = new Common();

    public async search(pageCurrent: number, pageSize: number, keywords: string, type: number): Promise<Result> {
        keywords = keywords.trim();
        let data: Goods[] = [];
        if (!keywords && type == 1) {
            const count = await this.ctx.repo.Goods.count({
                where: {
                    state: 0
                }
            });
            const ids = this.getRandomSet(pageSize, count).values();
            let value: any = ids.next().value;
            while (value !== undefined) {
                const goods = await this.ctx.repo.Goods.findOne({ id: value });
                data.push(goods as Goods);
                value = ids.next().value;
            }

            return this.common.success(enum_.ErrorCode.success, {
                list: data,
                count: pageSize
            });
        } else {
            const where = {
                name: Like(`%${keywords}%`),
                state: 0
            }
            if (type != 1) {
                where['type'] = type;
            }

            const count = await this.ctx.repo.Goods.count({
                where: where
            });

            data = await this.ctx.repo.Goods.find({
                where: where,
                skip: (pageCurrent - 1) * pageSize,
                take: pageSize
            });
            return this.common.success(enum_.ErrorCode.success, {
                list: data,
                count: count
            });
        }


    }
    // 获取不重复的id列表
    private getRandomSet(size: number, count: number): Set<number> {
        const set = new Set<number>();
        while (set.size < size) {
            set.add(Math.floor(Math.random() * count) + 1);
        }
        return set;
    }
}