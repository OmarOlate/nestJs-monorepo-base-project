import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('status_user')
export class StatusUser {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ name: 'code' })
  readonly code: string;

  @Column({ name: 'description' })
  readonly description: string;
}
