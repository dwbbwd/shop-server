import dayJs from 'dayjs'
import { Service } from "egg";

import { IMessageService } from "../contract";
import { enum_ } from '../utils';
import Common from '../utils/common';
import { Result } from "../utils/vo";

export default class MessageService extends Service implements IMessageService {
    private common: Common = new Common();

    public async findLimit(sid: number, rid: number): Promise<Result> {

        const sendData = await this.ctx.repo.Message.find({
            where: {
                sendUid: sid,
                receiveUid: rid
            }
        });
        const receiveData = await this.ctx.repo.Message.find({
            where: {
                sendUid: rid,
                receiveUid: sid
            }
        });

        // 将所以消息变为已读
        for (const r of receiveData) {
            r.state = 1;
            await this.ctx.repo.Message.save(r);
        }
        const data = sendData.concat(receiveData);
        data.sort((a, b) => {
            return a.sendTime - b.sendTime;
        })
        return this.common.success(enum_.ErrorCode.success, data);
    }
    public async add(sid: number, rid: number, content: string): Promise<Result> {
        await this.ctx.repo.Message.save({
            sendUid: sid,
            receiveUid: rid,
            content: content,
            sendTime: dayJs().unix(),
            state: 0
        })
        return this.common.success(enum_.ErrorCode.success, null);
    }
    public async delete(id: number): Promise<Result> {
        await this.ctx.repo.Message.delete({ id: id });
        return this.common.success(enum_.ErrorCode.success, null);
    }


}