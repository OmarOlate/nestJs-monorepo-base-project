import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Region } from './region.entity';

@Entity('provinces')
export class Province {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ name: 'name' })
  readonly name: string;

  @Column({ name: 'region_id' })
  readonly regionId: number;

  @ManyToOne(() => Region)
  @JoinColumn({ name: 'region_id' })
  readonly region: Region;
}
