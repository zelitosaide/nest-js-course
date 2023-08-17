import { Injectable } from "@nestjs/common";
import { Playlist } from "src/playlists/interfaces/playlist.interface";
import { AlbumsService } from "src/albums/albums.service";
import { PlaylistsService } from "src/playlists/playlists.service";
import { CreateArtistDto } from "./dto/create-artist.dto";
import { Artist } from "./entities/artist.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Album } from "src/albums/entities/album.entity";

@Injectable()
export class ArtistsService {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly playlistsService: PlaylistsService,
    @InjectRepository(Artist)
    private artistsRepository: Repository<Artist>,
  ) {}

  create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const artist = new Artist();
    artist.name = createArtistDto.name;
    artist.genre = createArtistDto.genre;
    artist.country = createArtistDto.country;
    return this.artistsRepository.save(artist);
  }

  findAll(): Promise<Artist[]> {
    return this.artistsRepository.find();
  }
  
  findOne(id: number): Promise<Artist | null> {
    return this.artistsRepository.findOneBy({ id });
  }

  findAlbums(id: number): Promise<Album[]> {
    return this.albumsService.findByArtistId(id);
  }

  // findPlaylists(id: number): Playlist[] {
  //   const playlists = this.playlistsService.findAll();
  //   return playlists.filter((playlist) => playlist.artist_id === id);
  // }
}
