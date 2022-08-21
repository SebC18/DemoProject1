import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        
        const request = context.switchToHttp().getRequest();
        
        return request.isAuthenticated();
    }
}
// try {
        //     if (request.session.passport.user) {
                
        //     }
        // } catch (e) {
        //     throw new UnauthorizedException();
        // }