import User from '../entity/user';
import { Result } from '../utils/vo';

export interface IUserService {
    login(account: string, password: string): Promise<Result>;
    register(entry: User): Promise<Result>;
}