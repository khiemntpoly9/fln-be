/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from 'src/db/entity/team.entity';
import { Repository } from 'typeorm';
import { teamDto } from './dto/team.dto';

@Injectable()
export class TeamService {
	constructor(
		@InjectRepository(Team)
		private teamRepository: Repository<Team>,
	) {}

	// Lấy thông tin team
	async getTeamList(id_team: number): Promise<Team> {
		try {
			const teamList = await this.teamRepository
				.createQueryBuilder('teams')
				.select(['team.id_team', 'team.id_user', 'team.team_name', 'team.team_detail', 'team.createdAt'])
				.where('team.id_team = :id_team', { id_team })
				.getOne();
			return teamList;
		} catch (error) {
			throw new Error(error);
		}
	}
	// Sửa thông tin team
	// async updateTeam(id_team: number, data: teamDto): Promise<Team> {
	// 	try {
	// 		const updateTeam = await this.teamRepository
	// 			.createQueryBuilder('teams')
	// 			.update(Team)
	// 			.set({
	// 				team_name: data.team_name,
	// 				team_detail: data.team_detail,
	// 				// có j bổ sung giúp với  cái này ko rõ  :)))
	// 			})
	// 			.where('team.id_team = :id_team', { id_team })
	// 			.execute();
	// 		return updateTeam;
	// 	} catch (error) {
	// 		throw new Error(error);
	// 	}
	// }
}
