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



@NgModule({
  declarations: [
    AppComponent,
    MultiselectorsComponent,
    ButtonsComponent,
    VfButtonsComponent,
    VfButtonGroupComponent
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
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
