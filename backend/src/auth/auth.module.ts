import { SessionSerializer } from './session.serializer';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule, PassportModule.register({ session: true})],
  providers: [AuthService, LocalStrategy, SessionSerializer]
})
export class AuthModule {}
