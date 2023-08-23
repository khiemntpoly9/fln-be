import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from 'src/db/entity/categories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
	constructor(
		@InjectRepository(Categories)
		private cateRepository: Repository<Categories>,
	) {}
}
