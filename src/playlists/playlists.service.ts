import { Injectable } from "@nestjs/common";
import { Playlist } from "./interfaces/playlist.interface";

@Injectable()
export class PlaylistsService {
  private readonly playlists: Playlist[] = [
    { id: 301, name: "Pop Hits", artist_id: 1 },
    { id: 302, name: "Rock Classics", artist_id: 2 },
  ];

  findAll(): Playlist[] {
    return this.playlists;
  }
}
