import Classify from '../entity/classify';
import { Result } from '../utils/vo';

export interface IClassifyService {
    findAll(): Promise<Result>;
    add(type: Classify): Promise<Result>;
    delete(id: number): Promise<Result>;
    update(type: Classify): Promise<Result>;
}