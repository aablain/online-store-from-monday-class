import { Pipe, PipeTransform } from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(albums: any, term: any):any {
    if (term === undefined) return albums;
    return albums.filter(function(album){
      if (album.title.toLowerCase().includes(term.toLowerCase()) || album.artist.toLowerCase().includes(term.toLowerCase())) {
        return album;
      }
    })
  }

}


//https://egghead.io/lessons/angular-2-filter-items-with-a-custom-search-pipe-in-angular-2
