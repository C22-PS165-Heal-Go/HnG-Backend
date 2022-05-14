import { Entity, Column, OneToMany } from 'typeorm';
import BaseEntity, { BaseDto } from './base.entity';

interface IUser {
    email: string;
    name: string;
    hash: string;
    salt: string;
}

export interface UserDto extends IUser, BaseDto {

}

@Entity()
export class User extends BaseEntity implements IUser {

    @Column({ unique: true })
        email: string;

    @Column()
        name: string;

    @Column()
        hash: string;

    @Column()
        salt: string;

    toDomain() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            created_at: this.created_at,
            updated_at: this.updated_at
        }
    }
}