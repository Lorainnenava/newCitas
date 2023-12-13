import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { TokenExpiredError } from 'jsonwebtoken';
import { IS_PUBLIC_KEY } from '../../../../utils';
import { SessionService } from '../session.service';
import { RequestUser } from '../../../../utils/types';

/**
 * AuthGuard
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private sessionService: SessionService,
    private reflector: Reflector, // recover custom metadata
  ) {}

  /**
   * this is to protect routes
   * @param context
   * @returns
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    /**
     * return data if the route is public
     */
    // getAllAndOverride try to recover metadata IS_PUBLIC_KEY
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    /**
     * verify wheter the route has token or not
     */
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService
        .verifyAsync(token, {
          secret: 'MY_SECRET_KEY',
        })
        .catch(async (error) => {
          if (error instanceof TokenExpiredError) {
            await this.sessionService.delete(token);
            throw new UnauthorizedException('This session expired');
          }
        });

      request['user'] = payload as RequestUser;
    } catch (error) {
      throw new UnauthorizedException(error.response);
    }
    return true;
  }

  /**
   * extractTokenFromHeader
   * @param request
   * @returns
   */
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
