import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DataserviceService } from "../dataservice.service";
import { IButton } from "./buttonInterface";



@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  
  clicked=false
  small= "small" ;
  
  splitlabel="Save"

  pdfDisabled=true
  pngDisabled=true
  driveisabled=true
  constructor(private data:DataserviceService) { }

  ngOnInit(): void {
    
  }

 

  public saveIconData = [
    {
      text: " PDF",
      icon: "pdf",
      click:()=>{
        
        this.splitlabel='PDF'

        this.pdfDisabled=false
        this.pngDisabled=true
        this.driveisabled=true
      }
    },
    {
      text: "Save as PNG",
      icon: "image",
      click:()=>{
        this.splitlabel='PNG'

        this.pdfDisabled=true
        this.pngDisabled=false
        this.driveisabled=true
      }
    },
    {
      text: "Upload to drive",
      icon: "upload",
      click:()=>{
    
        this.splitlabel='DRIVE'

        this.pdfDisabled=true
        this.pngDisabled=true
        this.driveisabled=false
      }
    },
  ];

  clickHandler(){
    this.clicked=!this.clicked
  }
  
  pdf(){
    console.log('pdf logged')
  }
}
