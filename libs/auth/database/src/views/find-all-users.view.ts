import { View, ViewColumn, ViewEntity } from 'typeorm';
import { IsNumber } from 'class-validator';

@ViewEntity('find_all_users')
export class FindAllUsersView {
  @ViewColumn({ name: 'id' })
  readonly id: number;

  @ViewColumn({ name: 'code' })
  readonly code: string;

  @ViewColumn({ name: 'rut' })
  readonly rut: string;

  @ViewColumn({ name: 'name' })
  readonly name: string;

  @ViewColumn({ name: 'father_last_name' })
  readonly fatherLastName: string;

  @ViewColumn({ name: 'mather_last_name' })
  readonly matherLastName: string;

  @ViewColumn({ name: 'email' })
  readonly email: string;

  @ViewColumn({ name: 'id_commerce' })
  readonly idCommerce: number;

  @ViewColumn({ name: 'name_commerce' })
  readonly nameCommerce: string;

  @ViewColumn({ name: 'id_commerce_branch' })
  readonly idCommerceBranch: number;

  @ViewColumn({ name: 'name_commerce_branch' })
  readonly nameCommerceBranch: string;

  @ViewColumn({ name: 'status_code' })
  readonly statusCode: string;
}
