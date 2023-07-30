import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NinjasModule } from "./ninjas/ninjas.module";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";
import { ArtistsController } from "./artists/artists.controller";
import { ArtistsService } from "./artists/artists.service";
import { AlbumsController } from "./albums/albums.controller";

@Module({
  imports: [NinjasModule],
  controllers: [
    AppController,
    CatsController,
    ArtistsController,
    AlbumsController,
  ],
  providers: [AppService, CatsService, ArtistsService],
})
export class AppModule {}
