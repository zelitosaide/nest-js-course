import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Artist } from "src/artists/entities/artist.entity";

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  release_year: number;

  @OneToOne(() => Artist)
  @JoinColumn()
  artist: Artist
}
