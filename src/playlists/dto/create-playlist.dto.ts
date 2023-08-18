import { Artist } from "src/artists/entities/artist.entity";
import { Song } from "src/songs/entities/song.entity";

export class CreatePlaylistDto {
  name: string;
  artist: Artist;
  songs: Song[];
}
