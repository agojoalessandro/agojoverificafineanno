import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MezziautomaticiComponent } from './mezziautomatici/mezziautomatici.component';

@NgModule({
  declarations: [
    AppComponent,
    MezziautomaticiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
