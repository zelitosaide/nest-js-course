import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';

@Module({
  exports: [AlbumsService],
  // controllers: [AlbumsController],
  providers: [AlbumsService]
})
export class AlbumsModule {}

// controllers: [NinjasController],
// providers: [NinjasService],
