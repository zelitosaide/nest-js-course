import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Song } from "./entities/song.entity";
import { CreateSongDto } from "./dto/create-song.dto";

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) {}

  create(createSongDto: CreateSongDto): Promise<Song> {
    const song = new Song();
    song.title = createSongDto.title;
    song.duration = createSongDto.duration;
    song.album = createSongDto.album;
    return this.songsRepository.save(song);
  }

  // private readonly songs: Song[] = [
  //   { id: 201, title: "Song 1", duration: "4:20", album_id: 101 },
  //   { id: 202, title: "Song 2", duration: "3:45", album_id: 101 },
  //   { id: 203, title: "Song 3", duration: "5:10", album_id: 101 },
  //   { id: 204, title: "Song A", duration: "3:30", album_id: 102 },
  //   { id: 205, title: "Song B", duration: "4:15", album_id: 102 },
  //   { id: 206, title: "Song C", duration: "3:55", album_id: 103 },
  // ];
}
