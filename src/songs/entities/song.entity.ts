import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Album } from "src/albums/entities/album.entity";

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  duration: string;

  @Column()
  albumId: number;

  @ManyToOne(() => Album, (album) => album.songs)
  album: Album;
}
