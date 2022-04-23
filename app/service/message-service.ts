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
        for (const r of sendData) {
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
    public async findUnread(rid: string) {
        const result: any[] = [];
        const data = await this.ctx.repo.Message.find({
            where: {
                receiveUid: rid
            }
        });
        const userIds: number[] = [];
        for (const r of data) {
            const res = userIds.find(row => row === r.sendUid)
            if (res) {
                continue;
            }
            userIds.push(r?.sendUid);
        }
        for (const uid of userIds) {
            const message: any[] = [];
            const user = await this.ctx.repo.User.findOne({
                where: {
                    id: uid
                }
            })
            const count = await this.ctx.repo.Message.count({
                where: {
                    receiveUid: rid,
                    sendUid: uid,
                    state: 0
                }
            });
            const receiveMessage = await this.ctx.repo.Message.find({
                where: {
                    receiveUid: rid,
                    sendUid: uid

                },
                order: {
                    sendTime: 'DESC'
                },
                take: 1
            });
            const sendMessage = await this.ctx.repo.Message.find({
                where: {
                    receiveUid: uid,
                    sendUid: rid

                },
                order: {
                    sendTime: 'DESC'
                },
                take: 1
            });
            if (receiveMessage.length > 0 && sendMessage.length > 0) {
                receiveMessage[0].sendTime >= sendMessage[0].sendTime ? message.push(receiveMessage[0]) : message.push(sendMessage[0]);
            } else if (!receiveMessage.length) {
                message.push(sendMessage[0]);
            } else {
                message.push(receiveMessage[0]);
            }

            result.push({
                user: user,
                count: count,
                message: message
            });
        }
        return this.common.success(enum_.ErrorCode.success, result);
    }

}