import { Album } from "src/albums/entities/album.entity";
import { Playlist } from "src/playlists/entities/playlist.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  genre: string;

  @Column()
  country: string;

  @OneToMany(() => Album, (album) => album.artist)
  albums: Album[];

  @OneToMany(() => Playlist, (playlist) => playlist.artist)
  playlists: Playlist[];
}
