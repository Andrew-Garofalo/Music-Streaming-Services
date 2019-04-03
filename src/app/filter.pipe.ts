import { Pipe, PipeTransform } from '@angular/core';
import Song from "./models/Song";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(songs: Song[], term: string): any {

    //
    //  check if the search term is undefined
    if (term == undefined) {
      return songs;
    }

    //
    //  return an updated array
    return songs.filter(c => {
      return (
      c.name.toLowerCase().includes(term.toLowerCase())
    || c.artist.toLowerCase().includes(term.toLowerCase())
    || c.album.toLowerCase().includes(term.toLowerCase()))
    }
    )
  }

}
