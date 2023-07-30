import { Injectable } from '@nestjs/common';
import { Artist } from './interfaces/artist.interface';

@Injectable()
export class ArtistsService {
  private readonly artists: Artist[] = [
    { id: 1, name: "Artist A", genre: "Pop",	country: "United States"},
    { id: 2, name: "Artist B", genre:	"Rock", country: "United Kingdom" },
    { id: 3, name: "Artist C", genre:	"Hip Hop", country: "Canada"}
  ];
}
