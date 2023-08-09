import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			// Get token from header
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: jwtConstants.secret,
		});
	}

	async validate(payload: any) {
		try {
			if (!payload || !payload.userId || !payload.email || !payload.role) {
				throw new UnauthorizedException('Invalid token');
			}
			return { userId: payload.userId, email: payload.email, role: payload.role };
		} catch (error) {
			console.log(error);
		}
	}
}
