import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Message {
    @PrimaryGeneratedColumn({
        type: 'int',
        comment: '主键id'
    })
    id: number;

    @Column({
        type: 'longtext',
        nullable: false,
        comment: '消息内容'
    })
    content: string;

    @Column({
        type: 'int',
        nullable: false,
        comment: '发送消息用户id'
    })
    sendUid: number;

    @Column({
        type: 'int',
        nullable: false,
        comment: '接收消息用户'
    })
    receiveUid: number;

    @Column({
        type: 'int',
        nullable: false,
        comment: '发送时间'
    })
    sendTime: number;
    @Column({
        type: 'int',
        nullable: false,
        comment: '状态'
    })
    state: number;
}
