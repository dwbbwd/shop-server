import { Service } from 'egg';

import { IUserService } from '../contract';
import user from '../entity/user';
import { enum_ } from '../utils';
import Common from '../utils/common';
import { GlobalError } from '../utils/error';
import { Result } from '../utils/vo';

export default class UserService extends Service implements IUserService {
    private common: Common = new Common();
    async login(account: string, password: string): Promise<Result> {
        const users = await this.ctx.repo.User.find({ where: { account: account } });
        if (!users?.length) this.common.error(enum_.ErrorCode.error, '用户不存在');
        if (users[0].password !== password) throw new GlobalError(enum_.ErrorCode.error, '用户不存在或密码错误')

        return this.common.success(enum_.ErrorCode.success, '123');
    }
    async register(entry: user): Promise<Result> {
        console.log(entry);

        throw new Error('Method not implemented.');
    }

}