import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './authz/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello('Hiya');
  }

  @UseGuards(JwtAuthGuard)
  @Get("/whisper")
  getWhisper(): string {
    return this.appService.getHello('Shh');
  }
}
