import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { Artist } from "./interfaces/artist.interface";
import { ArtistsService } from "./artists.service";
import { Album } from "src/albums/interfaces/album.interface";
import { Playlist } from "src/playlists/interfaces/playlist.interface";

@Controller("artists")
export class ArtistsController {
  constructor(private artistsService: ArtistsService) {}

  @Get()
  async findAll(): Promise<Artist[]> {
    return this.artistsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number): Promise<Artist> {
    return this.artistsService.findOne(id);
  }

  @Get(":id/albums")
  async findAlbums(@Param("id", ParseIntPipe) id: number): Promise<Album[]> {
    return this.artistsService.findAlbums(id);
  }

  @Get(":id/playlists")
  async findPlaylists(
    @Param("id", ParseIntPipe) id: number,
  ): Promise<Playlist[]> {
    return this.artistsService.findPlaylists(id);
  }
}
