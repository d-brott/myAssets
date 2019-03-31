import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowEntriesComponent } from './show-entries/show-entries.component';
import { AddEntryComponent } from './add-entry/add-entry.component';

const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'show-entries', component: ShowEntriesComponent},
  {path: 'add-entry', component: AddEntryComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
