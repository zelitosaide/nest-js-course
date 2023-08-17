import { Body, Controller, Get, Post } from "@nestjs/common";
import { SongsService } from "./songs.service";
import { Song } from "./entities/song.entity";
import { CreateSongDto } from "./dto/create-song.dto";

@Controller("songs")
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto): Promise<Song> {
    return this.songsService.create(createSongDto);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }
}
