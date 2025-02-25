import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('modules')
export class ModuleEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ name: 'code' })
  readonly code: string;

  @Column({ name: 'name' })
  readonly name: string;
}
