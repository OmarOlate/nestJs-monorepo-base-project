import { ApiProperty } from '@nestjs/swagger';
import { UpdateModuleInputDto } from '../../domain';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateModuleRequestDto
  implements Pick<UpdateModuleInputDto, 'newName'>
{
  @ApiProperty({
    description: 'New name for module',
    example: 'New name',
  })
  @IsString()
  @IsNotEmpty()
  readonly newName!: string;
}
