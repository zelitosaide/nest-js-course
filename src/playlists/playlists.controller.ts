import { Controller, Get } from "@nestjs/common";
import { Playlist } from "./interfaces/playlist.interface";
import { PlaylistsService } from "./playlists.service";

@Controller("playlists")
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Get()
  async findAll(): Promise<Playlist[]> {
    return this.playlistsService.findAll();
  }
}
