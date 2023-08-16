import { Module } from "@nestjs/common";
import { AlbumsService } from "./albums.service";
import { AlbumsController } from "./albums.controller";

import { TypeOrmModule } from "@nestjs/typeorm";
import { Album } from "./entities/album.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Album])],
  exports: [AlbumsService],
  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumsModule {}
