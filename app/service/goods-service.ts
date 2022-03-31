import { Service } from 'egg';
import Goods from '../entity/goods';
import { enum_ } from '../utils';
import Common from '../utils/common';
import { Result } from '../utils/vo';

export default class GoodsService extends Service {
    private common: Common = new Common();
    public async search(pageCurrent: number, pageSize: number, keywords: string, type: string): Promise<Result> {
        keywords = keywords.trim();
        let data: Goods[] = [];

        if (!keywords || type == 'all') {
            const count = await this.ctx.repo.Goods.count({
                where: {
                    name: {
                        like: `%${keywords}%`
                    },
                    type: type
                }
            });
            const ids = this.getRandomSet(pageSize, count);
            ids.forEach(async (val) => {
                const goods = await this.ctx.repo.Goods.findOne({ id: val });
                data.push(goods as Goods);
            })
            return this.common.success(enum_.ErrorCode.success, {
                list: data,
                count: pageSize
            });
        } else {
            const count = await this.ctx.repo.Goods.count({
                where: {
                    name: {
                        like: `%${keywords}%`
                    },
                    type: type
                }
            });
            data = await this.ctx.repo.Goods.find({
                where: {
                    name: {
                        like: `%${keywords}%`
                    },
                    type: type
                },
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
            set.add(Math.floor(Math.random() * count));
        }
        return set;
    }
}