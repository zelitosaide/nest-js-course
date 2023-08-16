import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SongsController } from "./songs/songs.controller";
import { SongsService } from "./songs/songs.service";
import { PlaylistSongsController } from "./playlist_songs/playlist_songs.controller";
import { PlaylistSongsService } from "./playlist_songs/playlist_songs.service";
import { AlbumsModule } from "./albums/albums.module";
import { ArtistsModule } from "./artists/artists.module";

@Module({
  imports: [AlbumsModule, ArtistsModule],
  controllers: [AppController, SongsController, PlaylistSongsController],
  providers: [AppService, SongsService, PlaylistSongsService],
})
export class AppModule {}
