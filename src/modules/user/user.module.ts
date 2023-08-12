/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from 'src/db/entity/user.entity';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
	imports: [TypeOrmModule.forFeature([User]), JwtModule.register({ global: true })],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
