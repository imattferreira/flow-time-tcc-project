import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { User } from './User';

@Entity('admin_users')
export class AdminUser {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => User, (user) => user.admin, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  users: User[];

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}
