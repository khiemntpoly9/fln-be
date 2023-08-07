import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Categories {
	@PrimaryGeneratedColumn({ type: 'int' })
	id_categories: number;

	@Column({ type: 'varchar', length: 255 })
	name: string;
}
