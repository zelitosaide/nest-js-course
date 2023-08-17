import { Injectable } from "@nestjs/common";
import { Album } from "./entities/album.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateAlbumDto } from "./dto/create-album.dto";

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Album)
    private albumsRepository: Repository<Album>,
  ) {}

  create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const album = new Album();
    album.title = createAlbumDto.title;
    album.releaseYear = createAlbumDto.releaseYear;
    album.artist = createAlbumDto.artist;
    return this.albumsRepository.save(album);
  }

  findAll(): Promise<Album[]> {
    return this.albumsRepository.find();
  }

  findOne(id: number): Promise<Album | null> {
    return this.albumsRepository.findOneBy({ id });
  }

  // private readonly albums: Album[] = [
  //   { id: 101, title: "Album X", release_year: 2010, artist_id: 1 },
  //   { id: 102, title: "Album Y", release_year: 2015, artist_id: 1 },
  //   { id: 103, title: "Album Z", release_year: 2018, artist_id: 2 },
  //   { id: 104, title: "Album ABC", release_year: 2020, artist_id: 3 },
  // ];
}
