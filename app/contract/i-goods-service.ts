import { Result } from '../utils/vo';

export interface IGoodsService {
    search(pageCurrent: number, pageSize: number, keywords: string, type: number): Promise<Result>;
}