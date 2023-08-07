import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'rate' })
export class Rate {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id_rate: number;

	@Column({ type: 'bigint', length: 20 })
	id_user: number;

	@Column({ type: 'text', nullable: true })
	comment: string;

	@Column({ type: 'int', length: 2 })
	point: number;

	@CreateDateColumn()
	createdAt: Date;
}
