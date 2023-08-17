import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { AlbumsService } from "./albums.service";
import { Album } from "./entities/album.entity";
import { CreateAlbumDto } from "./dto/create-album.dto";
// import { Album } from "./interfaces/album.interface";

@Controller("albums")
export class AlbumsController {
  constructor(private albumsService: AlbumsService) {}

  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto): Promise<Album> {
    return this.albumsService.create(createAlbumDto);
  }

  // @Get()
  // async findAll(): Promise<Album[]> {
  //   return this.albumsService.findAll();
  // }

  // @Get(":id")
  // async findOne(@Param("id", ParseIntPipe) id: number): Promise<Album> {
  //   return this.albumsService.findOne(id);
  // }
}
