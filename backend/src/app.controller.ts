import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return {msg: 'Logged in!'};
  }

  // GET /protected
  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}
