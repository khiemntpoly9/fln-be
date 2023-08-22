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

	// Tạo team
	async createTeam(teamDto: teamDto, id: number): Promise<Team> {
		try {
			const team = new Team();
			team.id_user = id;
			team.team_name = teamDto.team_name;
			team.team_detail = teamDto.team_detail;
			const saveTeam = await this.teamRepository.save(team);
			return saveTeam;
		} catch (error) {
			throw new Error(error);
		}
	}

	// Xoá team
	async deleteTeam(id_team: number): Promise<Team> {
		try {
			// Check team có tồn tại không
			const team = await this.teamRepository.findOneBy({ id_team: id_team });
			if (!team) {
				throw new Error('Không tìm thấy team');
			}
			return this.teamRepository.remove(team);
		} catch (error) {
			throw new Error(error);
		}
	}

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
			// Check team có tồn tài không
			const team = await this.teamRepository.findOneBy({ id_team: id_team });
			if (!team) {
				throw new Error('Không tìm thấy team');
			}
			Object.assign(team, teamDto);
			return this.teamRepository.save(team);
		} catch (error) {
			throw new Error(error);
		}
	}
}
