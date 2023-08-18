import { Artist } from "src/artists/entities/artist.entity";
import { Song } from "src/songs/entities/song.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  artistId: number;

  @ManyToOne(() => Artist, (artist) => artist.playlists)
  artist: Artist;

  @ManyToMany(() => Song)
  @JoinTable()
  songs: Song[]
}
