import dayJs from 'dayjs';
import { Service } from 'egg';

import { ICartService } from '../contract';
import Cart from '../entity/cart';
import { enum_ } from '../utils';
import Common from '../utils/common';
import { Result } from '../utils/vo';

export default class CartService extends Service implements ICartService {
    private common: Common = new Common();
    public async add(uid: number, gid: number, count: number): Promise<Result> {
        const goods = await this.ctx.repo.Cart.findOne({ uid: uid, gid: gid });
        if (goods) {
            this.common.error(enum_.ErrorCode, '商品已在购物车中');
        }
        await this.ctx.repo.Cart.save({
            uid: uid,
            gid: gid,
            count: count,
            modifyTime: dayJs().unix(),
        });
        return this.common.success(enum_.ErrorCode.success, null);
    }
    public async find(uid: number, pageSize: number, pageCurrent: number): Promise<Result> {
        const data = await this.ctx.repo.Cart.find({
            where: {
                uid: uid
            },
            skip: (pageCurrent - 1) * pageSize,
            take: pageSize
        });
        return this.common.success(enum_.ErrorCode.success, data);
    }
    public async delete(cids: number[]): Promise<Result> {
        for (const cid of cids) {
            await this.ctx.repo.Cart.delete({ id: cid });
        }
        return this.common.success(enum_.ErrorCode.success, null);
    }
    public async update(carts: Cart[]): Promise<Result> {
        for (const cart of carts) {
            cart.modifyTime = dayJs().unix();
            await this.ctx.repo.Cart.save(cart);
        }
        return this.common.success(enum_.ErrorCode.success, null);
    }

}