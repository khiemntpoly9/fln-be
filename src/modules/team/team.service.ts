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
	async updateTeam(id_team: number, teamDto: Partial<teamDto>): Promise<Team> {
		try {
			//check team có tồn tài ko
			const team = await this.teamRepository.findOneBy({id_team: id_team})
			if(!team){
				throw new Error('Không tìm thấy team');
			}
			Object.assign(team,teamDto);
			return this.teamRepository.save(team);
		} catch (error) {
			throw new Error(error);
		}
	}
}
