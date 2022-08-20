import { AuthGuard } from '@nestjs/passport';
import { Injectable } from "@nestjs/common";
import passportLocal from "passport-local";


@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {

}