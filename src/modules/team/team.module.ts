/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamService } from './team.service';
import { Team } from 'src/db/entity/team.entity';
import { TeamController } from './team.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Team])],
    controllers:[TeamController],
    providers:[TeamService],
    exports:[TeamService],
})
export class TeamModule {}