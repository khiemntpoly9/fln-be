/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NovelService } from './novel.service';
import { Novel } from 'src/db/entity/novel.entity';
import { NovelController } from './novel.controller';

@Module({
	imports: [TypeOrmModule.forFeature([Novel])],
	controllers: [NovelController],
	providers: [NovelService],
	exports: [NovelService],
})
export class NovelModule {}
