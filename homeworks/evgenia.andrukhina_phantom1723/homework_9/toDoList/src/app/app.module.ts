import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgClass } from '@angular/common';


import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
