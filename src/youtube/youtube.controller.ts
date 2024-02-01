import { Body, Controller, Post } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { queryInput, queryOutput } from './dto/query.dto';

@Controller('youtube')
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Post('/api')
  async getResult(@Body() input: queryInput): Promise<queryOutput> {
    return this.youtubeService.getResult(input);
  }
}
