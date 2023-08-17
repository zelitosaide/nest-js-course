import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PlaylistsService } from "./playlists.service";
import { Playlist } from "./entities/playlist.entity";
import { CreatePlaylistDto } from "./dto/create-playlist.dto";

@Controller("playlists")
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Post()
  create(@Body() createPlaylistDto: CreatePlaylistDto): Promise<Playlist> {
    return this.playlistsService.create(createPlaylistDto);
  }

  @Get()
  findAll() {
    return this.playlistsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.playlistsService.findOne(+id);
  }
}
