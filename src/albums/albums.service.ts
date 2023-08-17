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

  findByArtistId(artistId: number): Promise<Album[]> {
    return this.albumsRepository.findBy({ artistId });
  }
}
