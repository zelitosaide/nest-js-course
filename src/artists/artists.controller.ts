import { Controller, Get } from '@nestjs/common';
import { Artist } from './interfaces/artist.interface';

@Controller('artists')
export class ArtistsController {

  @Get()
  async findAll(): Promise<Artist[]> {
    return 
  }
}
