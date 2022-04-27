import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { auth } from 'express-openid-connect';


const config = {
  authRequired: false,
  auth0Logout: true,
  authorizationParams: {
    response_type: 'code id_token',
    audience: process.env.NX_AUTH0_CLIENT_SECRET,
    scope: 'openid profile email',
  },
};

@Injectable()
export class OidcMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}