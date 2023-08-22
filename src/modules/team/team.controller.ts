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
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/role.enum';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

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

	// Tạo team
	@Roles(Role.QTV, Role.User)
	@UseGuards(JwtAuthGuard)
	@Post('create')
	async createTeam(@Body() teamDto: teamDto, @Req() req: User, @Res() res: Response) {
		try {
			const team = await this.teamService.createTeam(teamDto, req.user.userId);
			return res.status(HttpStatus.OK).json({ message: 'Tạo team thành công!' });
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

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
	@Roles(Role.QTV, Role.User)
	@UseGuards(JwtAuthGuard)
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
