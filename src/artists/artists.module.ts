import { Module } from '@nestjs/common';
import { AlbumsModule } from 'src/albums/albums.module';

@Module({
  imports: [AlbumsModule]
})
export class ArtistsModule {}
