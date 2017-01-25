import { Pipe, PipeTransform } from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: 'title',
  pure: false
})

export class TitlePipe implements PipeTransform {

  transform(input: Album[], desiredTitle) {
    var output: Album[] = [];
    if (desiredTitle === "pulse") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].title === "ROCKSTAR") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;//return array of all objects
    }
  }


}
