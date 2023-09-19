/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Novel } from 'src/db/entity/novel.entity';
import { novelDto } from './dto/novel.dto';

@Injectable()
export class NovelService {
	constructor(
		@InjectRepository(Novel)
		private novelRepository: Repository<Novel>,
	) {}

	// Lấy tất cả novel
	async getAllNovel(): Promise<Novel[]> {
		try {
			const novellist = await this.novelRepository
				.createQueryBuilder('novel')
				.select(['novel.id_novel', 'novel.novel_name', 'novel.novel_detail', 'novel.createdAt'])
				.getMany();
			return novellist;
		} catch (error) {
			throw new Error(error);
		}
	}
	// Lấy chi tiết novel
	async getOneNovel(): Promise<Novel> {
		try {
			const novelDetail = await this.novelRepository
				.createQueryBuilder('novel')
				.select(['novel.id_novel', 'novel.novel_name', 'novel.novel_detail', 'novel.createdAt'])
				.getOne();
			return novelDetail;
		} catch (error) {
			throw new Error(error);
		}
	}
	// Tạo novel
	async createNovel(novelDto: novelDto): Promise<Novel> {
		try {
			const novel = new Novel();
			novel.name_novel = novelDto.name_novel;
		} catch (error) {
			throw new Error(error);
		}
	}

	// Sửa novel
	async updateNovel(): Promise<Novel> {
		try {
		} catch (error) {
			throw new Error(error);
		}
	}

	// Xóa novel
	async deleteNovel(): Promise<Novel> {
		try {
		} catch (error) {
			throw new Error(error);
		}
	}
}
