import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'follow' })
export class Follow {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id_rate: number;

	@Column({ type: 'bigint', length: 20 })
	id_user: number;

	@Column({ type: 'bigint', length: 20 })
	id_novel: number;
}
