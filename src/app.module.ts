import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SongsController } from "./songs/songs.controller";
import { SongsService } from "./songs/songs.service";
import { PlaylistSongsController } from "./playlist_songs/playlist_songs.controller";
import { PlaylistSongsService } from "./playlist_songs/playlist_songs.service";
// import { AlbumsModule } from "./albums/albums.module";
// import { ArtistsModule } from "./artists/artists.module";

// import { TypeOrmModule } from "@nestjs/typeorm";
// import { UsersModule } from "./users/users.module";
// import { SongsModule } from "./songs/songs.module";
import { LinksModule } from "./links/links.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ImagesModule } from "./images/images.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    // AlbumsModule,
    // ArtistsModule,
    // TypeOrmModule.forRoot({
    //   type: "mysql",
    //   host: "127.0.0.1",
    //   port: 3306,
    //   username: "root",
    //   password: "JoanaZelito@1",
    //   database: "musics",
    //   synchronize: true,
    //   autoLoadEntities: true,
    // }),
    // UsersModule,
    // SongsModule,
    LinksModule,
    MongooseModule.forRoot("mongodb://localhost/nest"),
    ImagesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "uploads"),
      serveRoot: "/uploads"
    }),
  ],
  controllers: [
    AppController,
    // SongsController,
    // PlaylistSongsController
  ],
  providers: [
    AppService,
    // SongsService,
    // PlaylistSongsService
  ],
})
export class AppModule {}
