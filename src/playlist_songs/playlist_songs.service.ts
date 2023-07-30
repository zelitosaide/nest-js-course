import { Injectable } from "@nestjs/common";
import { PlaylistSong } from "./interfaces/playlist_song.interface";

@Injectable()
export class PlaylistSongsService {
  private readonly playlistSongs: PlaylistSong[] = [
    { playlist_id: 301, song_id: 201 },
    { playlist_id: 301, song_id: 202 },
    { playlist_id: 302, song_id: 203 },
    { playlist_id: 302, song_id: 204 },
  ];
}
