import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// import { SongsController } from "./songs/songs.controller";
// import { SongsService } from "./songs/songs.service";
// import { PlaylistSongsController } from "./playlist_songs/playlist_songs.controller";
// import { PlaylistSongsService } from "./playlist_songs/playlist_songs.service";
// import { AlbumsModule } from "./albums/albums.module";
// import { ArtistsModule } from "./artists/artists.module";

// import { TypeOrmModule } from "@nestjs/typeorm";
// import { UsersModule } from "./users/users.module";
// import { SongsModule } from "./songs/songs.module";
// import { LinksModule } from "./links/links.module";
// import { MongooseModule } from "@nestjs/mongoose";
// import { ImagesModule } from "./images/images.module";
// import { ServeStaticModule } from "@nestjs/serve-static";
// import { join } from "path";
import { CoffeesModule } from "./coffees/coffees.module";
import { TypeOrmModule } from "@nestjs/typeorm";

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
    // LinksModule,
    // MongooseModule.forRoot("mongodb://localhost/nest"),
    // ImagesModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, "..", "uploads"),
    //   serveRoot: "/uploads",
    // }),
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: "postgres", // type of our database
      host: "localhost", // database host
      port: 5433, // database host
      username: "postgres", // username
      password: "pass123", // user password
      database: "postgres", // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
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
