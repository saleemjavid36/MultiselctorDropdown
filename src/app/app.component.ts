import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { from, OperatorFunction } from "rxjs";
import { delay, switchMap, map, tap } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit{
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'multiselectors';
  


}
