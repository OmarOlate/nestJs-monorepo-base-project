import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('regions')
export class Region {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ name: 'name' })
  readonly name: string;

  @Column({ name: 'ordinal' })
  readonly ordinal: string;

  @Column({ name: 'region_number' })
  readonly regionNumber: number;

  @Column({ name: 'region_iso' })
  readonly regionIso: string;

  @Column({ name: 'order' })
  readonly order: number;
}
