import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  genre: number;

  @Column()
  country: number;
}