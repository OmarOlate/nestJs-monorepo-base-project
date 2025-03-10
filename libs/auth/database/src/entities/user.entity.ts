import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StatusUser } from './status-user.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ name: 'code' })
  readonly code: string;

  @Column({ name: 'rut' })
  readonly rut: string;

  @Column({ name: 'name' })
  readonly name: string;

  @Column({ name: 'father_last_name' })
  readonly fatherLastName: string;

  @Column({ name: 'mather_last_name' })
  readonly matherLastName: string;

  @Column({ name: 'email' })
  readonly email: string;

  @Column({ name: 'password' })
  readonly password: string;

  @Column({ name: 'status_id' })
  readonly statusId: number;

  @Column({ name: 'contact_id' })
  readonly contactId: number;

  @ManyToOne(() => StatusUser)
  @JoinColumn({ name: 'status_id' })
  readonly status: StatusUser;
}
