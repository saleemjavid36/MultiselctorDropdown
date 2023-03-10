import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MultiselectorsComponent } from './multiselectors/multiselectors.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NotificationModule } from "@progress/kendo-angular-notification";
import { VfButtonsComponent } from './shared/vf-buttons/vf-buttons.component';
import { VfButtonGroupComponent } from './shared/vf-button-group/vf-button-group.component';
import { VfSplitButtonComponent } from './shared/vf-split-button/vf-split-button.component';
import { VfFloatingactionbuttonComponent } from './shared/vf-floatingactionbutton/vf-floatingactionbutton.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { VfUploadsComponent } from './shared/vf-uploads/vf-uploads.component';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { HttpClientModule } from '@angular/common/http';
import { DataserviceService } from './dataservice.service';




@NgModule({
  declarations: [
    AppComponent,
    MultiselectorsComponent,
    ButtonsComponent,
    VfButtonsComponent,
    VfButtonGroupComponent,
    VfSplitButtonComponent,
    VfFloatingactionbuttonComponent,
    VfUploadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    LabelModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule,
    NotificationModule,
    LayoutModule,
    UploadsModule,
    HttpClientModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
