import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('modules')
export class ModuleEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ name: 'code' })
  readonly code: string;

  @Column({ name: 'name' })
  name: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp without time zone' })
  updatedAt: Date;
}
