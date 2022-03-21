import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Classify {
    @PrimaryGeneratedColumn({
        type: 'int',
        comment: '主键id'
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        comment: '分类'
    })
    type: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        comment: '图标'
    })
    icon: string;
}
