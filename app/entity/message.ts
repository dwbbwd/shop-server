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
        comment: '用户id'
    })
    uid: number;
    @Column({
        type: 'int',
        nullable: false,
        comment: '数量'
    })
    count: number;
    @Column({
        type: 'int',
        nullable: false,
        comment: '创建时间'
    })
    createTime: number;
}
