import { Injectable } from "@nestjs/common";
import { Artist } from "./interfaces/artist.interface";
import { Album } from "src/albums/interfaces/album.interface";
import { Playlist } from "src/playlists/interfaces/playlist.interface";
import { AlbumsService } from "src/albums/albums.service";

@Injectable()
export class ArtistsService {
  constructor(private readonly albumsService: AlbumsService) {}

  private readonly artists: Artist[] = [
    { id: 1, name: "Artist A", genre: "Pop", country: "United States" },
    { id: 2, name: "Artist B", genre: "Rock", country: "United Kingdom" },
    { id: 3, name: "Artist C", genre: "Hip Hop", country: "Canada" },
  ];

  findAll(): Artist[] {
    return this.artists;
  }

  findOne(id: number): Artist {
    return this.artists.find((artist) => artist.id === id);
  }

  findAlbums(id: number): Album[] {
    const albums = this.albumsService.findAll();
    return albums.filter((album) => album.artist_id === id);
  }

  findPlaylists(id: number): Playlist[] {
    const playlists = [
      { id: 301, name: "Pop Hits", artist_id: 1 },
      { id: 302, name: "Rock Classics", artist_id: 2 },
    ];

    return playlists.filter((playlist) => playlist.artist_id === id);
  }
}
