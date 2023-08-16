import { Module } from "@nestjs/common";
import { PlaylistsService } from "./playlists.service";
import { PlaylistsController } from "./playlists.controller";

import { Playlist } from "./entities/playlist.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Playlist])],
  exports: [PlaylistsService],
  providers: [PlaylistsService],
  controllers: [PlaylistsController],
})
export class PlaylistsModule {}
