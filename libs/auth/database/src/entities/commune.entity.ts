import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Province } from './province.entity';

@Entity('communes')
export class Commune {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ name: 'name' })
  readonly name: string;

  @Column({ name: 'code' })
  readonly code: number;

  @Column({ name: 'province_id' })
  readonly provinceId: number;

  @ManyToOne(() => Province)
  @JoinColumn({ name: 'province_id' })
  readonly province: Province;
}
