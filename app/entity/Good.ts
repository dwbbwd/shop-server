import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Good {
    @PrimaryGeneratedColumn({
        type: 'int',
        comment: '商品id',
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        comment: '名称'
    })
    name: string;

    @Column({
        type: 'varchar',
        precision: 50,
        nullable: false,
        comment: '类别'
    })
    classify: string;

    @Column({
        type: 'int',
        nullable: false,
        comment: '数量'
    })
    count: number;

    @Column({
        type: 'varchar',
        nullable: false,
        comment: '交易地点'
    })
    tradingPlace: string;

}