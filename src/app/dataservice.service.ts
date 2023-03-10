import { Injectable } from '@angular/core';
import { FileInfo } from '@progress/kendo-angular-upload';

interface ImageInfo extends FileInfo {
  src?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  constructor() { }

  public myFiles: ImageInfo[] = []

  addFile(file: ImageInfo): void {
    this.myFiles.push(file);
    if(this.myFiles.length>1){
      this.myFiles.shift()
    }
  }

  getFiles(): ImageInfo[] {
    return this.myFiles;
  }
}
