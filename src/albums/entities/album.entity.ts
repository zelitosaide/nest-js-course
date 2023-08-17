import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Artist } from "src/artists/entities/artist.entity";
import { Song } from "src/songs/entities/song.entity";

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  releaseYear: number;

  @Column()
  artistId: number;

  @ManyToOne(() => Artist, (artist) => artist.albums)
  artist: Artist;

  @OneToMany(() => Song, (song) => song.album)
  songs: Song[];
}
