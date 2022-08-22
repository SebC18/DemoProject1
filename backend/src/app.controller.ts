import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';

@Controller('api')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any { // TODO: return JWT access token
    return this.authService.login(req.user); 
  }

  // GET /protected
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string { // TODO: require an Bearer token, validate token
    return req.user;
  }
}
