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
	Delete,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { NovelService } from './novel.service';
import { novelDto } from './dto/novel.dto';
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
@Controller('novel')
export class NovelController {
	constructor(private novelService: NovelService) {}

	//tạo novel
	@Roles(Role.QTV, Role.User)
	@UseGuards(JwtAuthGuard)
	@Post('create')
	async createNovel() {
		try {
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// lấy tất cả novel
	@Get('novellist')
	async getAllNovel() {
		try {
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// lấy chi tiết novel
	@Get('novel')
	async getOneNovel() {
		try {
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// sửa novel
	@Roles(Role.QTV, Role.User)
	@UseGuards(JwtAuthGuard)
	@Patch('update')
	async updateNovel() {
		try {
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	//xóa novel
	@Roles(Role.QTV, Role.User)
	@UseGuards(JwtAuthGuard)
	@Delete('delete')
	async deleteNovel() {
		try {
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
