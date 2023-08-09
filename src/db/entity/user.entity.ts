import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Role } from './role.entity';

@Entity({ name: 'user' })
export class User {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id: number;

	@Column({ type: 'varchar', length: 255 })
	full_name: string;

	@Column({ type: 'varchar', length: 255 })
	email: string;

	@Column({ type: 'varchar', length: 255 })
	password: string;

	@Column({ type: 'int', default: 2 })
	id_role: number;

	@Column({ type: 'varchar', length: 255, default: null, nullable: true })
	token: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => Role, (role) => role.user)
	@JoinColumn({ name: 'id_role', referencedColumnName: 'id_role' })
	role: Role;
}
