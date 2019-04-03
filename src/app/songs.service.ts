import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  fetchSongs() {
    return [
      {name:"hellogoodbye", artist:"beatles", album:"1stOne"}
    ]
  }

  constructor () {

  }

}
