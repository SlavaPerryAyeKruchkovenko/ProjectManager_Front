import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MainTemplateComponent} from "./main-template/main-template.component";
import {MainTemplateModule} from "./main-template/main-template.module";

@NgModule({
  declarations: [
    AppComponent,
    MainTemplateComponent
  ],
    imports: [
        BrowserModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
