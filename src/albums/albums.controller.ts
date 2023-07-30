import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { AlbumsService } from "./albums.service";
import { Album } from "./interfaces/album.interface";

@Controller("albums")
export class AlbumsController {
  constructor(private albumsService: AlbumsService) {}

  @Get()
  async findAll(): Promise<Album[]> {
    return this.albumsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number): Promise<Album> {
    return this.albumsService.findOne(id);
  }
}
