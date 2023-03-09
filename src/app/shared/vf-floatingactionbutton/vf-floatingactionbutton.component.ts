import { Component, OnInit } from '@angular/core';
import { ButtonThemeColor, DialItem } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'vf-floatingactionbutton',
  templateUrl: './vf-floatingactionbutton.component.html',
  styleUrls: ['./vf-floatingactionbutton.component.scss']
})
export class VfFloatingactionbuttonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public labelItems: Array<DialItem> = [
    { label: "Add" },
    { label: "Edit" },
    { label: "Save" },
  ];


  public dialOpen = false;

  public text =
    'This is my tiny experiments on buttons blaw blaw.....';

  public contacts = [
    {
      text: "Facebook",
      icon:
        "https://th.bing.com/th/id/OIP.hGaetDAQWapgIJbIOhPhXwHaHa?pid=ImgDet&rs=1",
      
    },
    {
      text: "Twitter",
      icon:
        "https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png",
    },
    {
      text: "Instagram",
      icon:
        "https://i0.wp.com/statesborodowntown.com/wp-content/uploads/2016/01/instagram-Logo-PNG-Transparent-Background-download.png?fit=1000%2C1000&ssl=1",
    },
  ];
  
 

  public get icon(): string {
    return this.dialOpen ? "close" : "share";
  }

  public onDialOpen(): void {
    this.dialOpen = true;
  }
  
  public onDialClose(): void {
    this.dialOpen = false;
  }

  shareItems(value:any){
    if(value=="Facebook"){
      alert("This page is going to Redirect Facebook Official Web Page Do u want accept it")
    }else if(value == "Twitter"){
      alert("This page is going to Redirect Twitter Official Web Page Do u want accept it")
    }else if(value == "Instagram"){
      alert("This page is going to Redirect Instagram Official Web Page Do u want accept it")
    }
  }

}
