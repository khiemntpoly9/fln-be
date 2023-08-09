/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class authDto {
	@ApiProperty()
	full_name: string;

	@ApiProperty()
	email: string;

	@ApiProperty()
	password: string;
}

export class authDtoGG {
	@ApiProperty()
	first_name: string;

	@ApiProperty()
	last_name: string;

	@ApiProperty()
	email: string;
}
