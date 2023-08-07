import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'team' })
export class Team {
	@PrimaryGeneratedColumn({ type: 'bigint' })
	id_team: number;

	@Column({ type: 'bigint', length: 20 })
	id_user: number;

	@Column({ type: 'varchar', length: 255 })
	team_name: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	team_detail: string;

	@CreateDateColumn()
	createdAt: Date;
}
