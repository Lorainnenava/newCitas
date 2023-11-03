import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SessionService } from 'src/application/session/session.service';
import { SessionResponseDto } from 'src/domain/collections/session/dto/response/sessionResponse.dto';

@ApiTags('Session')
@Controller()
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  /**
   * Delete
   * @param id
   * @returns
   */
  @Delete('DeleteSession/:id')
  async delete(@Param('id') id: string): Promise<SessionResponseDto> {
    return await this.sessionService.delete(id);
  }
}
