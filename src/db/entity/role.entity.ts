import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'role' })
export class Role {
	@PrimaryGeneratedColumn({ type: 'int' })
	id_role: number;

	@Column({ type: 'varchar', length: 50 })
	name_role: number;

	@Column({ type: 'varchar', length: 10 })
	short_role: string;

	@OneToMany(() => User, (user) => user.role)
	@JoinColumn({ name: 'id_role', referencedColumnName: 'id_role' })
	user: User[];
}
