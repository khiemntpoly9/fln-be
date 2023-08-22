/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class teamDto {
	@ApiProperty()
	id_team: number;

	@ApiProperty()
	id_user: number;

	@ApiProperty()
	team_name: string;

	@ApiProperty()
	team_detail: string;
}
