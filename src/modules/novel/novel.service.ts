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

	//Lấy tất cả novel
	async getAllNovel(): Promise<Novel[]> {
		try {
		} catch (error) {
			throw new Error(error);
		}
	}
	// lấy chi tiết novel
	async getOneNovel(): Promise<Novel> {
		try {
		} catch (error) {
			throw new Error(error);
		}
	}
	// Tạo novel
	async createNovel(): Promise<Novel> {
		try {
		} catch (error) {
			throw new Error(error);
		}
	}

	//sửa novel
	async updateNovel(): Promise<Novel> {
		try {
		} catch (error) {
			throw new Error(error);
		}
	}

	//xóa novel
	async deleteNovel(): Promise<Novel> {
		try {
		} catch (error) {
			throw new Error(error);
		}
	}
}
