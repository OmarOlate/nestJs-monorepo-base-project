import { UpdateModuleInputDto } from '../../domain';
import { ApiNumberQuery } from '@nest-js-monorepo-base-project/decorators';

export class UpdateModuleQueryDto implements Pick<UpdateModuleInputDto, 'id'> {
  @ApiNumberQuery('Module`s id')
  readonly id!: number;
}
