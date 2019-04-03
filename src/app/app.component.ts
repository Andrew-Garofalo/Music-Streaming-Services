// This is the app-root referred to in index
// angular splits component html, js (this is js file), and css into separate files.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'musicStreamingServices'; //:string enforcing typescript on the variable
  myName:string;
  myVar:number[] //typescript enforces myVar is type number arrays
  //myCar:Car = new Car() //Now typeOf will output myCar is type Car
}
