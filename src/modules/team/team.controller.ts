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
	@Get('teamList')
	async teamList() {
		// có j bổ sung giúp với  cái này ko rõ
		try {
			const teamList = await this.teamService.getTeamList(''); // có j bổ sung giúp với  cái này ko rõ
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	//Sửa thông tin team
	// @Patch('update')
	// // @Body vs @Res bao loi :)
	// async updateTeam(@Body team: teamDto, @Res res: Response) { // có j bổ sung giúp với  cái này ko rõ
	//     try {
	//         // Lấy data mới
	//         const update = await this.teamService.updateTeam(''); // có j bổ sung giúp với  cái này ko rõ
	//         return res.status(HttpStatus.OK).json({ message: 'Cập nhật tài khoản thành công!' });
	//     } catch (error) {
	//         throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
	//     }
	// }
}
