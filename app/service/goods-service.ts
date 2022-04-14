import dayJs from 'dayjs';
import { Service } from 'egg';
import { Like } from 'typeorm';

import { IGoodsService } from '../contract';
import Goods from '../entity/goods';
import { enum_ } from '../utils';
import Common from '../utils/common';
import { Result } from '../utils/vo';

export default class GoodsService extends Service implements IGoodsService {

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
            const list = await this.ctx.repo.Goods.find({
                where: {
                    state: 0
                },
                skip: (pageCurrent - 1) * pageSize,
                take: pageSize
            })

            return this.common.success(enum_.ErrorCode.success, {
                list: list,
                count: count
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
    public async find(uid: number): Promise<Result> {

        const data = await this.ctx.repo.Goods.find({
            where: {
                uid: uid
            }
        });
        return this.common.success(enum_.ErrorCode.success, data);
    }
    public async add(uid: number, name: string, price: number, type: number, img: string, count: number, note: string, tradingPlace: string): Promise<Result> {
        const goods = new Goods();
        goods.uid = uid;
        goods.name = name;
        goods.price = price;
        goods.type = type;
        goods.imgUrl = img;
        goods.state = 0;
        goods.count = count;
        goods.note = note;
        goods.tradingPlace = tradingPlace;
        goods.releaseTime = dayJs().unix();
        goods.modifyTime = dayJs().unix();
        await this.ctx.repo.Goods.save(goods);
        return this.common.success(enum_.ErrorCode.success, null);
    }
    public async delete(id: number): Promise<Result> {
        await this.ctx.repo.Goods.delete({ id: id });
        return this.common.success(enum_.ErrorCode.success, null);
    }
    public async save(goods: Goods): Promise<Result> {
        goods.modifyTime = dayJs().unix();
        await this.ctx.repo.Goods.save(goods);
        return this.common.success(enum_.ErrorCode.success, null);
    }

}