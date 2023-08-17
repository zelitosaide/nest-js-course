import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Artist } from "src/artists/entities/artist.entity";

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
}
