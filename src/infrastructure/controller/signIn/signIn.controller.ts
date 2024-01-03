import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body } from '@nestjs/common';
import { SignInService } from '../../../application/services/signIn/signIn.service';
import { SignInRequestDto } from '../../../application/dtos/signIn/request/signIn.dto';

@ApiTags('SignIn')
@Controller('/signIn')
export class SignInController {
  constructor(private readonly signInService: SignInService) { }

  /**
   * SignIn
   * @param request
   * @returns
   */
  @Public()
  @Post()
  async signIn(@Body() request: SignInRequestDto): Promise<object> {
    return this.signInService.signIn(request);
  }
}
