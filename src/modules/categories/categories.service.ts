import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from 'src/db/entity/categories.entity';
import { Repository } from 'typeorm';
import { categoriesDto } from './dto/categories.dto';

@Injectable()
export class CategoriesService {
	constructor(
		@InjectRepository(Categories)
		private cateRepository: Repository<Categories>,
	) {}
	//Lấy tất cả danh mục
	async getAllCategories(): Promise<Categories[]> {
		try {
			const categories = await this.cateRepository
				.createQueryBuilder('categories')
				.select(['categories.id_categories', 'categories.name'])
				.getMany();
			return categories;
		} catch (error) {
			throw new Error(error);
		}
	}

	// Thêm danh mục
	async createCategories(categoriesDto: categoriesDto): Promise<Categories> {
		try {
			const categories = new Categories();
			categories.name = categoriesDto.name;
			const saveCategories = await this.cateRepository.save(categories);
			return saveCategories;
		} catch (error) {
			throw new Error(error);
		}
	}

	// Sửa danh mục
	async updateCategories(id_categories: number, categoriesDto: Partial<categoriesDto>): Promise<Categories> {
		try {
			// Check categories có tồn tài không
			const categories = await this.cateRepository.findOneBy({ id_categories: id_categories });
			if (!categories) {
				throw new Error('Không tìm thấy categories');
			}
			Object.assign(categories, categoriesDto);
			return this.cateRepository.save(categories);
		} catch (error) {
			throw new Error(error);
		}
	}

	// Xoá danh mục
	async deleteCategories(id_categories: number): Promise<Categories> {
		try {
			// Check categories có tồn tại không
			const categories = await this.cateRepository.findOneBy({ id_categories: id_categories });
			if (!categories) {
				throw new Error('Không tìm thấy categories');
			}
			return this.cateRepository.remove(categories);
		} catch (error) {
			throw new Error(error);
		}
	}
}
