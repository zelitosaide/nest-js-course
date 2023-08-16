import { Module } from "@nestjs/common";
import { AlbumsModule } from "src/albums/albums.module";
import { ArtistsController } from "./artists.controller";
import { ArtistsService } from "./artists.service";
import { PlaylistsModule } from "src/playlists/playlists.module";

import { TypeOrmModule } from "@nestjs/typeorm";
import { Artist } from "./entities/artist.entity";

@Module({
  imports: [AlbumsModule, PlaylistsModule, TypeOrmModule.forFeature([Artist])],
  controllers: [ArtistsController],
  providers: [ArtistsService],
})
export class ArtistsModule {}
