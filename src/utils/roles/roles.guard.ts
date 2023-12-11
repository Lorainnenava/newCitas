import { Role } from './role.enum';
import { ROLES_KEY } from './roles';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    const decodedToken = this.jwtService.decode(token.replace('Bearer ', ''));
    if (typeof decodedToken === 'string') {
      return false;
    }
    const user = decodedToken as { roles?: string };
    return requiredRoles.some((role) => role === user.roles);
  }
}
