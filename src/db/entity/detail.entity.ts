import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'detail' })
export class Detail {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id_detail: number;

	@Column({ type: 'text' })
	summary: string;

	@Column({ type: 'text', nullable: true })
	note: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	another_name: string;

	@Column({ type: 'int', length: 1, default: 0 })
	adult: number;
}
