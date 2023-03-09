import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vf-split-button',
  templateUrl: './vf-split-button.component.html',
  styleUrls: ['./vf-split-button.component.scss']
})
export class VfSplitButtonComponent implements OnInit {
  @Input() data:object | any
  @Input() icon:string | any
  @Input() arrowButtonIcon:string | any

  constructor() { }

  ngOnInit(): void {

  }

 

  
}
