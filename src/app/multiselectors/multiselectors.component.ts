import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { from, OperatorFunction } from "rxjs";
import { delay, switchMap, map, tap } from "rxjs/operators";

@Component({
  selector: 'app-multiselectors',
  templateUrl: './multiselectors.component.html',
  styleUrls: ['./multiselectors.component.scss']
})
export class MultiselectorsComponent implements OnInit {

 

  @ViewChild("list") list: { filterChange: { asObservable: () => { (): any; new(): any; pipe: { (arg0: OperatorFunction<unknown, { text: string; value: number; }[]>): { (): any; new(): any; subscribe: { (arg0: (x: { text: string; value: number; }[]) => void): void; new(): any; }; }; new(): any; }; }; }; loading: boolean; } | any;
  
  constructor() {
    this.data = this.source.slice();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public data: Array<{ text: string; value: number }>;

  ngAfterViewInit() {
    const contains = (value: any) => (s: { text: string; }) =>
      s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    this.list.filterChange
      .asObservable()
      .pipe(
        switchMap((value) =>
          from([this.source]).pipe(
            tap(() => (this.list.loading = true)),
            delay(200),
            map((data) => data.filter(contains(value)))
          )
        )
      )
      .subscribe((x: { text: string; value: number; }[]) => {
        this.data = x;
      });
  }



  public source: Array<{ text: string; value: number }> = [
    { text: "Item1", value: 1 },
    { text: "Item2", value: 2 },
    { text: "Item3", value: 3 },
    { text: "Item4", value: 4 },
    { text: "Item5", value: 5 },
    { text: "Item6", value: 6 },
    { text: "Item7", value: 7 },
    { text: "Item8", value: 8 },
  ];

  public value: any = [];

  
  public isChecked = false;
  public searchText: string = '';

  public get isIndet() {
    return (
      this.value.length !== 0 && this.value.length !== this.data.length
    );
  }

  public get toggleAllText() {
    return this.isChecked ? "Deselect All" : "Select All";
  }

  public isItemSelected(item: { value: any; }) {
    return this.value.some((x: { value: any; }) => x.value === item.value);
  }

  public onClick() {
    this.isChecked = !this.isChecked;
    this.value = this.isChecked ? this.data.slice()  : [];

    const valueWithCommas = this.value.join(", ");
    console.log(valueWithCommas); 
  }

  public onValueChange() {
    this.isChecked = this.value.length === this.data.length;
  }

  // public onSearch() {
  //   const contains = (value: any) => (s: { text: string }) =>
  //     s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1;

  //   this.list.filterChange.emit(this.searchText);

  //   if (this.searchText === '') {
  //     this.data = this.source.slice();
  //   } else {
  //     this.list.loading = true;
  //     from([this.source])
  //       .pipe(
  //         delay(200),
  //         map((data) => data.filter(contains(this.searchText)))
  //       )
  //       .subscribe((x: { text: string; value: number }[]) => {
  //         this.data = x;
  //         this.list.loading = false;
  //       });
  //   }
  // }

}
