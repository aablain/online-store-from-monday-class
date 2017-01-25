import { Pipe, PipeTransform } from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: 'artist',
  pure: false
})

export class ArtistPipe implements PipeTransform {

  transform(input: Album[], desiredArtist) {
    var output: Album[] = [];
    if (desiredArtist === "PinkFloyd") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Pink Floyd") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredArtist === "AniDiFranco") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].artist === "Ani DiFranco") {
          output.push(input[i]);
        }
      }
      return output;
    }

    else {
      return input;//return array of all objects
    }
  }


}
