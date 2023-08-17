import { Artist } from "src/artists/entities/artist.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

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
}
