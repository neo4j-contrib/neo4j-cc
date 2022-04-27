import { Logger, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor() {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.NX_AUTH0_DOMAIN}.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: process.env.NX_AUTH0_AUDIENCE,
      issuer: `${process.env.NX_AUTH0_DOMAIN}`,
      algorithms: ['RS256'],
    });
    this.logger.log(`using ${process.env.NX_AUTH0_AUDIENCE}, ${process.env.NX_AUTH0_DOMAIN}`)
  }

  validate(payload: unknown): unknown {
    return payload;
  }
}
