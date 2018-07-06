import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListFormsComponent } from './list-forms/list-forms.component';
import { ListStatusComponent } from './list-status/list-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFormsComponent,
    ListStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
