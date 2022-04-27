import { Controller, Get, Post, UseGuards, Res, Req, Render } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Response, Request } from 'express';

import { AppService } from './app.service';

@Controller("")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  index(@Req() req: Request) {
    return {
      title: 'Neo4j CC API',
      isAuthenticated: req.oidc.isAuthenticated(),
      user: req.oidc.user
    };
  }

  @Get('/profile')
  @Render('profile')
  getProfile(@Req() req: Request) {
    const oidcUser = req.oidc.user
    return {
      title: 'Profile',
      user: oidcUser,
      userProfile: JSON.stringify(oidcUser, null, 2),
      isAuthenticated: req.oidc.isAuthenticated()
    };
  }

}
