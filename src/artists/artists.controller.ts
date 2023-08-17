import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { ArtistsService } from "./artists.service";
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
  findAll() {
    return this.artistsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.artistsService.findOne(+id);
  }

  @Get(":id/albums")
  findAlbums(@Param("id") id: string) {
    return this.artistsService.findAlbums(+id);
  }

  // @Get(":id/playlists")
  // async findPlaylists(
  //   @Param("id", ParseIntPipe) id: number,
  // ): Promise<Playlist[]> {
  //   return this.artistsService.findPlaylists(id);
  // }
}
