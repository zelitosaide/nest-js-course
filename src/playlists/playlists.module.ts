import { Module } from "@nestjs/common";
import { PlaylistsService } from "./playlists.service";
import { PlaylistsController } from "./playlists.controller";

@Module({
  exports: [PlaylistsService],
  providers: [PlaylistsService],
  controllers: [PlaylistsController],
})
export class PlaylistsModule {}
