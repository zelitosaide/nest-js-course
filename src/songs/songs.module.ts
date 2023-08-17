import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Song } from "./entities/song.entity";
import { SongsService } from "./songs.service";
import { SongsController } from "./songs.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  exports: [SongsService],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
