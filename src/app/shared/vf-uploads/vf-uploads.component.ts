import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {
  FileInfo,
  SelectEvent,
  RemoveEvent,
  FileRestrictions,
} from "@progress/kendo-angular-upload";
import { DataserviceService } from 'src/app/dataservice.service';


const photosUrl =
  "https://www.telerik.com/kendo-angular-ui-develop/components/uploads/assets/";


const fillMyFiles = (count: number): Array<FileInfo> => {
  const files = [];
  for (let i = 0; i < count; i++) {
    files.push({
      name: `${i}.png`,
      src: `${photosUrl}${i}.png`,
    });
  }
  return files;
};

interface ImageInfo extends FileInfo {
  src?: string;
}

@Component({
  selector: 'vf-uploads',
  templateUrl: './vf-uploads.component.html',
  styleUrls: ['./vf-uploads.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VfUploadsComponent implements OnInit {

  constructor(private data:DataserviceService) { }

  ngOnInit(): void {
  }

  // public photosCount = 2;
  //  public myFiles: ImageInfo[] = fillMyFiles(this.photosCount);
    public myFiles: ImageInfo[] = [];
 

  public myRestrictions: FileRestrictions = {
    allowedExtensions: [".jpg", ".png",".svg",".jfif"],
  };

  public onSelect(ev: SelectEvent): void {
    if (this.myFiles && ev.files) {
      ev.files.forEach((file: FileInfo) => {
        if (file.rawFile && !file.validationErrors) {
          const reader = new FileReader();

          reader.onloadend = () => {
            //this.myFiles.push({ ...file, src: <string>reader.result });
            const imageInfo: ImageInfo = { ...file, src: <string>reader.result };

            this.myFiles.push(imageInfo);
          this.data.addFile(imageInfo);
          };
          reader.readAsDataURL(file.rawFile);
        }
      });

    }
    if(this.myFiles.length>=1){
      this.myFiles.shift()
    }
  }

  public onRemove(ev: RemoveEvent): void {
    ev.files.forEach((file: FileInfo) => {
      this.myFiles = this.myFiles.filter((f) => f.uid !== file.uid);
    });
    
  }

}
