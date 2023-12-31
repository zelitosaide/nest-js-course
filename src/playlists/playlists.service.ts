import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Playlist } from "./entities/playlist.entity";
import { CreatePlaylistDto } from "./dto/create-playlist.dto";

@Injectable()
export class PlaylistsService {
  constructor(
    @InjectRepository(Playlist)
    private playlistsRepository: Repository<Playlist>,
  ) {}

  create(createPlaylistDto: CreatePlaylistDto): Promise<Playlist> {
    const playlist = new Playlist();
    playlist.name = createPlaylistDto.name;
    playlist.artist = createPlaylistDto.artist;
    playlist.songs = createPlaylistDto.songs;
    return this.playlistsRepository.save(playlist);
  }

  findAll(): Promise<Playlist[]> {
    return this.playlistsRepository.find();
  }

  findOne(id: number): Promise<Playlist | null> {
    return this.playlistsRepository.findOneBy({ id });
  }

  findByArtistId(artistId: number): Promise<Playlist[]> {
    return this.playlistsRepository.findBy({ artistId });
  }
}
