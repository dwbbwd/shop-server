import dayJs from 'dayjs'
import { Service } from "egg";
import { Like } from 'typeorm';

import { IOrderService } from "../contract";
import Order from '../entity/order';
import order from "../entity/order";
import { enum_ } from '../utils';
import Common from '../utils/common';
import { Result } from "../utils/vo";

export default class OrderService extends Service implements IOrderService {

    private common: Common = new Common();
    public async add(orders: order[]): Promise<Result> {
        for (const r of orders) {
            r.orderNo = dayJs().format('YYYYMMDDHHmmss') + Math.random().toString(16).substring(2, 10);
            r.state = 0;
            r.createTime = dayJs().unix();
            r.modifyTime = dayJs().unix();
            await this.ctx.repo.Order.save(r);
        }
        return this.common.success(enum_.ErrorCode.success, null);
    }
    public async delete(id: number): Promise<Result> {
        await this.ctx.repo.Order.delete({ id: id });
        return this.common.success(enum_.ErrorCode.success, null);
    }
    public async findAll(uid: number): Promise<Result> {
        const data = await this.ctx.repo.Order.find({
            uid: uid
        });
        return this.common.success(enum_.ErrorCode.success, data);
    }
    public async search(uid: number, keyword: string, _: number, __: number): Promise<Result> {
        const orders = await this.ctx.repo.Order.find({
            where: {
                uid: uid,
                orderNo: Like(`%${keyword}%`),
            }
        });
        for (const order of orders) {
            const goods = await this.ctx.repo.Goods.findOne({ id: order.id });
            const user = await this.ctx.repo.User.findOne({ id: goods?.uid });
            order['seller'] = user?.id;
            order['sellerName'] = user?.name;
            order['sellerImg'] = user?.img;
            order['goodsPrice'] = goods?.price;
        }
        return this.common.success(enum_.ErrorCode.success, {
            list: orders
        });
    }
    public async payOrder(oid: number): Promise<Result> {
        const order = await this.ctx.repo.Order.findOne({ id: oid }) as Order;
        if (!order) {
            this.common.error(enum_.ErrorCode, '订单不存在');
        }
        order.payTime = dayJs().unix();
        await this.ctx.repo.Order.save(order);
        return this.common.success(enum_.ErrorCode.success, null);
    }
    public async completeOrder(oid: number): Promise<Result> {
        const order = await this.ctx.repo.Order.findOne({ id: oid }) as Order;
        if (!order) {
            this.common.error(enum_.ErrorCode, '订单不存在');
        }
        if (!order.payTime) {
            this.common.error(enum_.ErrorCode, '订单未支付');
        }
        order.completeTime = dayJs().unix();
        order.state = 1;
        await this.ctx.repo.Order.save(order);
        return this.common.success(enum_.ErrorCode.success, null);
    }
    public async save(order: Order): Promise<Result> {
        order.modifyTime = dayJs().unix();
        await this.ctx.repo.Order.save(order);
        return this.common.success(enum_.ErrorCode.success, null);
    }
    public async findAllByBg() {
        const orders = await this.ctx.repo.Order.find();
        return this.common.success(enum_.ErrorCode.success, orders);
    }
}