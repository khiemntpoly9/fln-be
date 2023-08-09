import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'rate' })
export class Rate {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id_rate: number;

	@Column({ type: 'bigint' })
	id_user: number;

	@Column({ type: 'text', nullable: true })
	comment: string;

	@Column({ type: 'int' })
	point: number;

	@CreateDateColumn()
	createdAt: Date;
}
