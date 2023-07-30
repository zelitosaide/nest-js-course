import { Controller, Get } from '@nestjs/common';
import { Artist } from './interfaces/artist.interface';
import { ArtistsService } from './artists.service';

@Controller('artists')
export class ArtistsController {
  constructor(private artistsService: ArtistsService) {}

  @Get()
  async findAll(): Promise<Artist[]> {
    return this.artistsService.findAll();
  }
}
