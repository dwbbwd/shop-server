import Goods from '../entity/goods';
import { Result } from '../utils/vo';

export interface IGoodsService {
    search(pageCurrent: number, pageSize: number, keywords: string, type: number): Promise<Result>;
    find(uid: number): Promise<Result>;
    add(uid: number, name: string, price: number, type: number, img: string, count: number, note: string, tradingPlace: string): Promise<Result>;
    delete(id: number): Promise<Result>;
    save(goods: Goods): Promise<Result>;
    getGood(id: number): Promise<Result>;
}