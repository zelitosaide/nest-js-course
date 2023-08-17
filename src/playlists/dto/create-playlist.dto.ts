import { Artist } from "src/artists/entities/artist.entity";

export class CreatePlaylistDto {
  name: string;
  artist: Artist;
}
