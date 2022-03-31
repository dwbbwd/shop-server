import dayJS from 'dayjs';
import { Service } from 'egg';

import { IUserService } from '../contract';
import User from '../entity/user';
import { enum_ } from '../utils';
import { Auth } from '../utils/auth';
import Common from '../utils/common';
import { Result } from '../utils/vo';

export default class UserService extends Service implements IUserService {

    private common: Common = new Common();
    private auth: Auth = new Auth();

    async phoneLogin(phone: string, password: string): Promise<Result> {
        const users = await this.ctx.repo.User.find({ where: { tel: phone } });

        if (!users.length) return this.common.error(enum_.ErrorCode.error, '用户不存在');
        if (users[0].state) return this.common.error(enum_.ErrorCode.ban, '用户已被禁用');
        if (users[0].password !== password) return this.common.error(enum_.ErrorCode.error, '账号或密码错误');

        const token = this.auth.encode({ id: users[0].id });

        return this.common.success(enum_.ErrorCode.success, {
            token: token,
            user: users[0]
        });
    }
    async emailLogin(email: string, password: string): Promise<Result> {
        const users = await this.ctx.repo.User.find({ where: { email: email } });

        if (!users.length) return this.common.error(enum_.ErrorCode.error, '用户不存在');
        if (users[0].state) return this.common.error(enum_.ErrorCode.ban, '用户已被禁用');
        if (users[0].password !== password) return this.common.error(enum_.ErrorCode.error, '账号或密码错误');

        const token = this.auth.encode({ id: users[0].id });

        return this.common.success(enum_.ErrorCode.success, {
            token: token,
            user: users[0]
        });
    }
    async register(entry: User): Promise<Result> {
        const count = await this.ctx.repo.User.count({ where: { account: entry.tel } });
        if (count) return this.common.error(enum_.ErrorCode.error, '手机号已存在');
        entry.createTime = dayJS().unix();
        entry.updateTime = dayJS().unix();
        entry.state = 0;
        await this.ctx.repo.User.save(entry);
        return this.common.success(enum_.ErrorCode.success, {});
    }
    async modify(entry: User): Promise<Result> {
        const user = await this.ctx.repo.User.findOne({ id: entry.id });
        if (!user) return this.common.error(enum_.ErrorCode.error, '用户不存在');
        entry.id = user.id;
        entry.createTime = user.createTime;
        entry.updateTime = dayJS().unix();
        await this.ctx.repo.User.save(entry);
        return this.common.success(enum_.ErrorCode.success, {});
    }
    async getUser(uid: number): Promise<Result> {
        const user = await this.ctx.repo.User.findOne({ id: uid });
        if (!user) return this.common.error(enum_.ErrorCode.error, '用户不存在');
        return this.common.success(enum_.ErrorCode.success, user);
    }
}