import User from '../entity/user';
import { Result } from '../utils/vo';

export interface IUserService {
    phoneLogin(tel: string, password: string): Promise<Result>;
    emailLogin(tel: string, password: string): Promise<Result>;
    register(entry: User): Promise<Result>;
    modify(entry: User): Promise<Result>;
    getUser(uid: number): Promise<Result>;
    getCard(uid: number): Promise<Result>;
}
