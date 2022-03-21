import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Cart {
    @PrimaryGeneratedColumn({
        type: 'int',
        comment: '主键id'
    })
    id: number;

    @Column({
        type: 'int',
        nullable: false,
        comment: '用户id'
    })
    uid: number;
    @Column({
        type: 'int',
        nullable: false,
        comment: '商品id'
    })
    gid: number;
    @Column({
        type: 'int',
        nullable: false,
        comment: '数量'
    })
    count: number;
    @Column({
        type: 'int',
        nullable: false,
        comment: '修改时间'
    })
    modifyTime: number;
}
