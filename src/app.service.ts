import { Injectable } from "@nestjs/common";

// import { FormattedDate } from "./app.interface";
import { AlbumsService } from "./albums/albums.service";

@Injectable()
export class AppService {
  constructor(private readonly albumsService: AlbumsService) {}

  // getHello(): FormattedDate {
  //   const date = new Date();

  //   return {
  //     date: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  //   };
  // }

  getAlbums() {
    return this.albumsService.findAll();
  }
}
