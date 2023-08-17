import { Injectable } from "@nestjs/common";
// import { Playlist } from "./interfaces/playlist.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Playlist } from "./entities/playlist.entity";

@Injectable()
export class PlaylistsService {
  constructor(
    @InjectRepository(Playlist)
    private playlistsRepository: Repository<Playlist>,
  ) {}

  // private readonly playlists: Playlist[] = [
  //   { id: 301, name: "Pop Hits", artist_id: 1 },
  //   { id: 302, name: "Rock Classics", artist_id: 2 },
  // ];

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
