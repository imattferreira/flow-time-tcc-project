import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { AdminUser } from './AdminUser';

@Entity('users')
export class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  rfid: string;

  @Column()
  contract_init: Date;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  admin_id: string;

  @ManyToOne(() => AdminUser)
  @JoinColumn({ name: 'admin_id' })
  admin: AdminUser;
  
  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}
