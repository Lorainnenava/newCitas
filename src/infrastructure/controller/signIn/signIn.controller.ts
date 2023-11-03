import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body } from '@nestjs/common';
import { SignInService } from 'src/application/signIn/signIn.service';
import { SignInRequestDto } from 'src/domain/collections/signIn/dto/signIn.dto';

@ApiTags('SignIn')
@Controller()
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  /**
   * SignIn
   * @param data
   * @returns
   */
  @Post('/SignIn')
  async signIn(@Body() data: SignInRequestDto): Promise<object> {
    return this.signInService.signIn(data);
  }
}
