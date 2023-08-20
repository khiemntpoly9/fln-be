import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'team' })
export class Team {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id_team: number;

	@Column({ type: 'bigint' })
	id_user: number;

	@Column({ type: 'varchar', length: 255 })
	team_name: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	team_detail: string;

	@CreateDateColumn()
	createdAt: Date;

	@ManyToMany(() => User, (user) => user.team)
	@JoinColumn({ name: 'id_user', referencedColumnName: 'id_user' })
	user: User;
}
