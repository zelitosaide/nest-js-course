import { Artist } from "src/artists/entities/artist.entity";

export class CreateAlbumDto {
  title: string;
  releaseYear: number;
  artist: Artist;
}