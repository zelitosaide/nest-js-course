import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NinjasModule } from "./ninjas/ninjas.module";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";
import { SongsController } from "./songs/songs.controller";
import { SongsService } from "./songs/songs.service";
import { PlaylistSongsController } from "./playlist_songs/playlist_songs.controller";
import { PlaylistSongsService } from "./playlist_songs/playlist_songs.service";
import { AlbumsModule } from "./albums/albums.module";
import { ArtistsModule } from "./artists/artists.module";

@Module({
  imports: [NinjasModule, AlbumsModule, ArtistsModule],
  controllers: [
    AppController,
    CatsController,
    SongsController,
    PlaylistSongsController,
  ],
  providers: [
    AppService,
    CatsService,
    SongsService,
    PlaylistSongsService,
  ],
})
export class AppModule {}
