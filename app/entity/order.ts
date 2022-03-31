import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Order {
    @PrimaryGeneratedColumn({
        type: 'int',
        comment: '主键id'
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        comment: '订单编号'
    })
    orderNo: string;

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

    @Column({
        type: 'int',
        nullable: false,
        comment: '创建时间'
    })
    createTime: number;

    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        comment: '支付时间'
    })
    payTime: number;

    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        comment: '完成时间'
    })
    completeTime: number;
    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        comment: '状态(0=待收货,1=未评价,2=已评价)'
    })
    state: number;
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false,
        comment: '价格'
    })
    totalPrice: number;
}
