import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Goods {
    @PrimaryGeneratedColumn({
        type: 'int',
        comment: '商品id',
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
        comment: '名称'
    })
    name: string;

    @Column({
        type: 'int',
        precision: 50,
        nullable: false,
        comment: '类别'
    })
    type: number;

    @Column({
        type: 'int',
        nullable: false,
        comment: '数量'
    })
    count: number;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
        comment: '交易地点'
    })
    tradingPlace: string;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 255,
        comment: '备注信息'
    })
    note: string;

    @Column({
        type: 'int',
        nullable: false,
        comment: '用户id'
    })
    uid: number;

    @Column({
        type: 'int',
        nullable: false,
        comment: '商品状态'
    })
    state: number;

    @Column({
        type: 'int',
        nullable: false,
        comment: '发布时间'
    })
    releaseTime: number;

    @Column({
        type: 'int',
        nullable: false,
        comment: '修改时间'
    })
    modifyTime: number;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false,
        comment: '价格'
    })
    price: number;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
        comment: '商品图片'
    })
    imgUrl: string;
}