import { Module } from '@nestjs/common';
import { AlbumsModule } from 'src/albums/albums.module';
import { ArtistsController } from './artists.controller';
import { ArtistsService } from './artists.service';

@Module({
  imports: [AlbumsModule],
  controllers: [ArtistsController],
  providers: [ArtistsService]
})
export class ArtistsModule {}
