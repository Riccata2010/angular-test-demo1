import { Component } from "@angular/core";
import { XXX } from "./xxx/xxx";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular  xxxx";
  constructor() {
    let x: XXX = new XXX();
    console.log(x.test);
  }
}

import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

range(1, 4).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
).subscribe(x => console.log(x));
