import dayJs from 'dayjs'
import { Service } from "egg";

import { ICommentService } from "../contract";
import { enum_ } from '../utils';
import Common from '../utils/common';
import { Result } from "../utils/vo";

export default class CommentService extends Service implements ICommentService {

    private common: Common = new Common();

    public async find(gid: number): Promise<Result> {
        const data = await this.ctx.repo.Comment.find({
            where: {
                gid: gid
            }
        });
        return this.common.success(enum_.ErrorCode.success, data);
    }
    public async add(gid: number, uid: number, content: string): Promise<Result> {
        await this.ctx.repo.Comment.save({
            gid: gid,
            uid: uid,
            content: content,
            createTime: dayJs().unix()
        })
        return this.common.success(enum_.ErrorCode.success, null);
    }
    public async delete(id: number): Promise<Result> {
        await this.ctx.repo.Comment.delete({ id: id });
        return this.common.success(enum_.ErrorCode.success, null);
    }

}