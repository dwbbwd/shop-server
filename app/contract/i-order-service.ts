import Order from '../entity/order';
import { Result } from '../utils/vo';

export interface IOrderService {
    add(orders: Order[]): Promise<Result>;
}