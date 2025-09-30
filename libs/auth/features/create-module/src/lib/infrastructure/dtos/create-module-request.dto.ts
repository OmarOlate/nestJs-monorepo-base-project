import { ApiProperty } from '@nestjs/swagger';
import { CreateModuleInputDto } from '../../domain';
import { IsNotEmpty, IsSemVer, IsString } from 'class-validator';

export class CreateModuleRequestDto implements CreateModuleInputDto {
  @ApiProperty({ description: 'Code', example: 'STRING' })
  @IsNotEmpty()
  @IsString()
  code!: string;

  @ApiProperty({ description: 'Name', example: 'Module' })
  @IsNotEmpty()
  @IsString()
  name!: string;
}
