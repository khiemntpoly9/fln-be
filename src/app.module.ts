/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
/* */
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from './db/data-source';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { MailModule } from './modules/mail/mail.module';
import { PassportModule } from '@nestjs/passport';
import { TeamModule } from './modules/team/team.module';
import { CategoriesModule } from './modules/categories/categories.module';
/* */

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRoot(dataSourceOptions),
		UserModule,
		TeamModule,
		CategoriesModule,
		AuthModule,
		CloudinaryModule,
		MailModule,
		PassportModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(LoggerMiddleware)
			.exclude(
				{ path: 'auth/login', method: RequestMethod.POST },
				{ path: 'auth/check', method: RequestMethod.GET },
				{ path: 'auth/logout', method: RequestMethod.POST },
				{ path: 'auth/register', method: RequestMethod.POST },
				{ path: 'auth/google/redirect', method: RequestMethod.GET },
			)
			.forRoutes({ path: '*', method: RequestMethod.ALL });
	}
	constructor(private dataSource: DataSource) {}
}
