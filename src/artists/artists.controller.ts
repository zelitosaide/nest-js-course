import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ArtistsService } from "./artists.service";
import { Album } from "src/albums/interfaces/album.interface";
import { Playlist } from "src/playlists/interfaces/playlist.interface";
import { Artist } from "./entities/artist.entity";
import { CreateArtistDto } from "./dto/create-artist.dto";

@Controller("artists")
export class ArtistsController {
  constructor(private artistsService: ArtistsService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto): Promise<Artist> {
    return this.artistsService.create(createArtistDto);
  }

  @Get()
  async findAll(): Promise<Artist[]> {
    return this.artistsService.findAll();
  }

  // @Get(":id")
  // async findOne(@Param("id", ParseIntPipe) id: number): Promise<Artist> {
  //   return this.artistsService.findOne(id);
  // }

  // @Get(":id/albums")
  // async findAlbums(@Param("id", ParseIntPipe) id: number): Promise<Album[]> {
  //   return this.artistsService.findAlbums(id);
  // }

  // @Get(":id/playlists")
  // async findPlaylists(
  //   @Param("id", ParseIntPipe) id: number,
  // ): Promise<Playlist[]> {
  //   return this.artistsService.findPlaylists(id);
  // }
}
