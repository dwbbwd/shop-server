import Cart from '../entity/cart';
import { Result } from '../utils/vo';

export interface ICartService {
    add(uid: number, gid: number, count: number): Promise<Result>;
    find(uid: number, pageSize: number, pageCurrent: number): Promise<Result>;
    delete(cids: number[]): Promise<Result>;
    update(carts: Cart[]): Promise<Result>;

}