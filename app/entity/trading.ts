import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Trading {
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
        type: 'varchar',
        nullable: false,
        length: 50,
        comment: '类别'
    })
    classify: string;
    @Column({
        type: 'int',
        nullable: false,
        default: 0,
        comment: '类别'
    })
    default: number;
}
