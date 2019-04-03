import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  clientUrl: string = "/assets/mp3s/mp3.json";

  fetchData()   {
    //
    //  use angular's HTTP client!
    return this.http.get(this.clientUrl);
  }

  constructor(private http : HttpClient) { }
}
