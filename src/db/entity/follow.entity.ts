import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'follow' })
export class Follow {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id_rate: number;

	@Column({ type: 'bigint' })
	id_user: number;

	@Column({ type: 'bigint' })
	id_novel: number;
}
