import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { DatabaseService } from './database.service';
import { FormsModule } from '@angular/forms';
import { ShowEntriesComponent } from './show-entries/show-entries.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEntryComponent,
    ShowEntriesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
