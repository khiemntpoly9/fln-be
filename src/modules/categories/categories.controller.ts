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
import { CategoriesService } from './categories.service';
import { categoriesDto } from './dto/categories.dto';
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
@Controller('categories')
export class CategoriesController {
	constructor(private categoriesService: CategoriesService) {}

	// Tạo categories
	@Roles(Role.QTV)
	@UseGuards(JwtAuthGuard)
	@Post('create')
	async createCategories(@Body() categoriesDto: categoriesDto, @Res() res: Response) {
		try {
			await this.categoriesService.createCategories(categoriesDto);
			return res.status(HttpStatus.OK).json({ message: 'Tạo categories thành công!' });
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// Lấy thông tin categories
	@Get('list-cate')
	async listCate(@Res() res: Response) {
		try {
			const categories = await this.categoriesService.getAllCategories();
			return res.status(HttpStatus.OK).json(categories);
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// Sửa thông tin categories
	@Roles(Role.QTV)
	@UseGuards(JwtAuthGuard)
	@Patch('update')
	async updateCate(@Body() categoriesDto: categoriesDto, @Res() res: Response, @Query('id') id: number) {
		try {
			await this.categoriesService.updateCategories(id, categoriesDto);
			return res.status(HttpStatus.OK).json({ message: 'Cập nhật categories thành công!' });
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// Xoá categories
	@Roles(Role.QTV)
	@UseGuards(JwtAuthGuard)
	@Delete('delete')
	async deleteCate(@Res() res: Response, @Query('id') id: number) {
		try {
			await this.categoriesService.deleteCategories(id);
			return res.status(HttpStatus.OK).json({ message: 'Xoá categories thành công!' });
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
