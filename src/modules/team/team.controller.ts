/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	Controller,
	Get,
	UseGuards,
	Req,
	HttpException,
	HttpStatus,
	Post,
	Body,
	Res,
	Patch,
	Query,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { TeamService } from './team.service';
import { teamDto } from './dto/team.dto';

interface User extends Request {
	user: {
		userId: number;
		email: string;
		role: string;
	};
}
@Controller('team')
export class TeamController {
	constructor(private teamService: TeamService) {}

	// Lấy thông tin team
	@Get('teamlist')
	async teamList(@Res() res: Response, @Query('id') id: number) {
		try {
			const teamList = await this.teamService.getTeamList(id);
			return res.status(HttpStatus.OK).json(teamList);
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// Sửa thông tin team
	@Patch('update')
	async updateTeam(@Body() teamDto: teamDto, @Res() res: Response, @Query('id') id: number) {
		try {
			// Lấy data mới
			const update = await this.teamService.updateTeam(id, teamDto);
			return res.status(HttpStatus.OK).json({ message: 'Cập nhật tài khoản thành công!' });
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
