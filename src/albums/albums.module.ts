import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';

@Module({
  exports: [AlbumsService]
})
export class AlbumsModule {}
