import { Module } from "@nestjs/common";
import { PlaylistsService } from "./playlists.service";

@Module({
  exports: [PlaylistsService],
  providers: [PlaylistsService],
})
export class PlaylistsModule {}
