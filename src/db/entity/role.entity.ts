import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

Entity('role');
export class Role {
	@PrimaryGeneratedColumn({ type: 'int' })
	id_role: number;

	@Column({ type: 'varchar', length: 50 })
	name_role: number;

	@Column({ type: 'varchar', length: 10 })
	short_role: string;
}
