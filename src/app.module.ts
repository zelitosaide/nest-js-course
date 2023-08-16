import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SongsController } from "./songs/songs.controller";
import { SongsService } from "./songs/songs.service";
import { PlaylistSongsController } from "./playlist_songs/playlist_songs.controller";
import { PlaylistSongsService } from "./playlist_songs/playlist_songs.service";
import { AlbumsModule } from "./albums/albums.module";
import { ArtistsModule } from "./artists/artists.module";

import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
// import { User } from "./users/entities/user.entity";
// import { Artist } from "./artists/entities/artist.entity";
// import { Album } from "./albums/entities/album.entity";
// import { Playlist } from "./playlists/entities/playlist.entity";

@Module({
  imports: [
    AlbumsModule,
    ArtistsModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "JoanaZelito@1",
      database: "musics",
      // entities: [User, Artist, Album, Playlist],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
  controllers: [AppController, SongsController, PlaylistSongsController],
  providers: [AppService, SongsService, PlaylistSongsService],
})
export class AppModule {}
