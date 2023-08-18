import { Album } from "src/albums/entities/album.entity";

export class CreateSongDto {
  title: string;
  duration: string;
  album: Album;
}
