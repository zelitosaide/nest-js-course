import { Injectable } from "@nestjs/common";
// import { Artist } from "./interfaces/artist.interface";
import { Album } from "src/albums/interfaces/album.interface";
import { Playlist } from "src/playlists/interfaces/playlist.interface";
import { AlbumsService } from "src/albums/albums.service";
import { PlaylistsService } from "src/playlists/playlists.service";
import { CreateArtistDto } from "./dto/create-artist.dto";
import { Artist } from "./entities/artist.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ArtistsService {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly playlistsService: PlaylistsService,
    @InjectRepository(Artist)
    private artistsRepository: Repository<Artist>,
  ) {}

  // private readonly artists: Artist[] = [
  //   { id: 1, name: "Artist A", genre: "Pop", country: "United States" },
  //   { id: 2, name: "Artist B", genre: "Rock", country: "United Kingdom" },
  //   { id: 3, name: "Artist C", genre: "Hip Hop", country: "Canada" },
  // ];

  create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const artist = new Artist();
    artist.name = createArtistDto.name;
    artist.genre = createArtistDto.genre;
    artist.country = createArtistDto.country;

    return this.artistsRepository.save(artist);
  }

  // findAll(): Artist[] {
  //   return this.artists;
  // }

  // findOne(id: number): Artist {
  //   return this.artists.find((artist) => artist.id === id);
  // }

  // findAlbums(id: number): Album[] {
  //   const albums = this.albumsService.findAll();
  //   return albums.filter((album) => album.artist_id === id);
  // }

  // findPlaylists(id: number): Playlist[] {
  //   const playlists = this.playlistsService.findAll();
  //   return playlists.filter((playlist) => playlist.artist_id === id);
  // }
}
