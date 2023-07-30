import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { Artist } from "./interfaces/artist.interface";
import { ArtistsService } from "./artists.service";

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
}
