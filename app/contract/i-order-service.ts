import Order from '../entity/order';
import { Result } from '../utils/vo';

export interface IOrderService {
    add(orders: Order[]): Promise<Result>;
    delete(id: number): Promise<Result>;
    findAll(uid: number): Promise<Result>;
    search(uid: number, keyword: string, pageSize: number, pageCurrent: number): Promise<Result>;
    payOrder(oid: number): Promise<Result>;
    completeOrder(oid: number): Promise<Result>;
    save(order: Order): Promise<Result>;
} 