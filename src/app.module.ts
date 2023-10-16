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
import { CoffeeRatingModule } from "./coffee-rating/coffee-rating.module";
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "@hapi/joi";
import appConfig from "./config/app.config";

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
    ConfigModule.forRoot({
      // envFilePath: [".environment", ".env"],
      // ignoreEnvFile: true,
      // validationSchema: Joi.object({
      //   DATABASE_HOST: Joi.required(),
      //   DATABASE_PORT: Joi.number().default(5433),
      // }),
      load: [appConfig]
    }),
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CoffeeRatingModule,
    DatabaseModule,
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
