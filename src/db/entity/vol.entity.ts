import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'vol' })
export class Vol {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id_vol: number;

	@Column({ type: 'bigint', length: 20 })
	id_chap: number;

	@Column({ type: 'varchar', length: 255 })
	title: string;
}
