import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class User {
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
        comment: '手机号'
    })
    tel: string;
    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        comment: '邮箱'
    })
    email: string;
    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        comment: '头像'
    })
    img: string;
    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        comment: '真实姓名'
    })
    name: string;
    @Column({
        type: 'int',
        nullable: false,
        comment: '状态'
    })
    state: number;

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
