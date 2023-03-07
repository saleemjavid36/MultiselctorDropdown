import { Component, OnInit } from '@angular/core';
import { IButton } from 'src/app/buttons/buttonInterface';

@Component({
  selector: 'vf-button-group',
  templateUrl: './vf-button-group.component.html',
  styleUrls: ['./vf-button-group.component.scss']
})
export class VfButtonGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public status = "#10b507";
  public buttons = [
    { text: "Away",
     icon: "k-i-clock", 
     color: "#f0c505" ,
     selected: false,
    },
    {
      text: "Available",
      icon: "k-i-check-circle",
      color: "#10b507",
      selected: true,
    },
    { text: "Offline", 
      icon: "k-i-x-circle",
      color: "#707070",
      selected: false,
    },
    { text: "Do not disturb",
      icon: "k-i-minus-circle",
      color: "#e30000",
      selected: false,
    },
  ];
  
  public img =
    "https://res.cloudinary.com/dg3ksfbz0/image/upload/v1669799028/Recovered_mkhpb6.png";

  
    public selectedChange(e: boolean, btn: IButton): void {
    this.status = btn.color;
  }

}
