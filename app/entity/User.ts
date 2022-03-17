import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
class User {
    @PrimaryGeneratedColumn({
        type: 'int',
        comment:'主键id'
    })
    id: number;

    @Column({
        type: 'varchar',
        length:50,
        comment:'账号'
    })
    account: string;
    @Column({
        type: 'varchar',
        length:50,
        comment: '密码'
    })
    password: string;
    @Column({
        type:'tinyint',
        default: 1,
        comment:'账号的是否激活(1=未激活,0=激活)'
    })
    status: boolean;
    @Column({
        type:'varchar',
        length:50,
        nullable: true,
        comment: '昵称'
    })
    nickname: string;

    @Column({
        type:'varchar',
        length:50,
        default:'这个人很懒什么都没有留下!',
        nullable: false,
        comment: '个签'
    })
    aSign:string


}

export default User