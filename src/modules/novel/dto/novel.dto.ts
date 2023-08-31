/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class novelDto {
	@ApiProperty()
	id_novel: number;

	@ApiProperty()
	name_novel: string;

	@ApiProperty()
	thumbnail: string;

	@ApiProperty()
	author: string;

	@ApiProperty()
	illustrator: string;

	@ApiProperty()
	views: number;

	@ApiProperty()
	status: number;

	@ApiProperty()
	id_categories: number;

	@ApiProperty()
	id_vol: number;

	@ApiProperty()
	id_rate: number;

	@ApiProperty()
	id_user: number;

	@ApiProperty()
	id_team: number;

	@ApiProperty()
	id_detail: number;
}
