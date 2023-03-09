import {  Component,  EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import {  ButtonSize } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'vf-buttons',
  templateUrl: './vf-buttons.component.html',
  styleUrls: ['./vf-buttons.component.scss']
})
export class VfButtonsComponent implements OnInit {
  @Input() icon:string | any
  @Input() title:string | any
  @Output() btnClick = new EventEmitter();
  
  @Input() size:string | any
  @Input() fillMode:string | any

  @Input() themeColor:string | any
  

  // public sizess: ButtonSize = 'large';

  constructor() { 
   
  }

  ngDoCheck(){
  
  }

  ngOnInit(): void {
     
  }

  onClick() {
		this.btnClick.emit();
	}

}
