import { Module } from "@nestjs/common";
import { AlbumsModule } from "src/albums/albums.module";
import { ArtistsController } from "./artists.controller";
import { ArtistsService } from "./artists.service";
import { PlaylistsModule } from "src/playlists/playlists.module";

@Module({
  imports: [AlbumsModule, PlaylistsModule],
  controllers: [ArtistsController],
  providers: [ArtistsService],
})
export class ArtistsModule {}
