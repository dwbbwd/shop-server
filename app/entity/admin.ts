import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Admin {
    @PrimaryGeneratedColumn({
        type: 'int',
        comment: '主键id'
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        comment: '密码'
    })
    password: string;
    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        comment: '账号'
    })
    account: string;
    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
        comment: '头像'
    })
    img: string;
    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        comment: '用户名'
    })
    username: string;

    @Column({
        type: 'int',
        nullable: false,
        comment: '创建时间'
    })
    createTime: number;

    @Column({
        type: 'int',
        nullable: false,
        comment: '修改时间'
    })
    updateTime: number;
}
