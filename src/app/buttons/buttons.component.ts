import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { IButton } from "./buttonInterface";



@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  
  clicked=false

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(){
    this.clicked=!this.clicked
  }
  
}
