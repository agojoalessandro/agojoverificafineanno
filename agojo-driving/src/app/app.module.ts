import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MezziautomaticiComponent } from './mezziautomatici/mezziautomatici.component';
import { DrivingListComponent } from './driving-list/driving-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MezziautomaticiComponent,
    DrivingListComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
