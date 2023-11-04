import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body } from '@nestjs/common';
import { SignInService } from '../../../application/signIn/signIn.service';
import { Public } from '../../../utils';
import { SignInRequestDto } from '../../../domain/collections/signIn/dto/signIn.dto';

@ApiTags('SignIn')
@Controller()
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  /**
   * SignIn
   * @param data
   * @returns
   */
  @Public()
  @Post('/SignIn')
  async signIn(@Body() data: SignInRequestDto): Promise<object> {
    return this.signInService.signIn(data);
  }
}
