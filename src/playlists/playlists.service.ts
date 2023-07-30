import { Injectable } from "@nestjs/common";
import { Playlist } from "./interfaces/playlist.interface";

@Injectable()
export class PlaylistsService {
  private readonly playlists: Playlist[] = [
    { id: 301, name: "Pop Hits", created_by: "User1" },
    { id: 302, name: "Rock Classics", created_by: "User2" },
  ];
}
