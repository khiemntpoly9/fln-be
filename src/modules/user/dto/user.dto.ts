/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class userDto {
	@ApiProperty()
	id: number;

	@ApiProperty()
	full_name: string;

	@ApiProperty()
	email: string;

	@ApiProperty()
	password: string;

	@ApiProperty()
	id_role: number;

	@ApiProperty()
	token: string;
}
