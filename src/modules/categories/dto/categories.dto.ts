/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class categoriesDto{
    @ApiProperty()
    id_categories: number;
    @ApiProperty()
    name: string;
}