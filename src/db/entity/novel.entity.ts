import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'novel' })
export class Novel {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id_novel: number;

	@Column({ type: 'varchar', length: 255 })
	name_novel: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	thumbnail: string;

	@Column({ type: 'varchar', length: 255 })
	author: string;

	@Column({ type: 'varchar', length: 255 })
	illustrator: string;

	@Column({ type: 'bigint', default: 0 })
	views: number;

	@Column({ type: 'int' })
	status: number;

	@Column({ type: 'int' })
	id_categories: number;

	@Column({ type: 'int' })
	id_vol: number;

	@Column({ type: 'bigint', nullable: true })
	id_rate: number;

	@Column({ type: 'bigint' })
	id_user: number;

	@Column({ type: 'bigint' })
	id_team: number;

	@Column({ type: 'bigint' })
	id_detail: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
