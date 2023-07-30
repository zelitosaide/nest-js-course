import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NinjasModule } from "./ninjas/ninjas.module";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";
import { ArtistsController } from "./artists/artists.controller";
import { ArtistsService } from "./artists/artists.service";
import { AlbumsController } from "./albums/albums.controller";
import { AlbumsService } from "./albums/albums.service";
import { SongsController } from "./songs/songs.controller";
import { SongsService } from "./songs/songs.service";
import { PlaylistsController } from "./playlists/playlists.controller";
import { PlaylistsService } from "./playlists/playlists.service";
import { PlaylistSongsController } from "./playlist_songs/playlist_songs.controller";
import { PlaylistSongsService } from "./playlist_songs/playlist_songs.service";

@Module({
  imports: [NinjasModule],
  controllers: [
    AppController,
    CatsController,
    ArtistsController,
    AlbumsController,
    SongsController,
    PlaylistsController,
    PlaylistSongsController,
  ],
  providers: [
    AppService,
    CatsService,
    ArtistsService,
    AlbumsService,
    SongsService,
    PlaylistsService,
    PlaylistSongsService,
  ],
})
export class AppModule {}
