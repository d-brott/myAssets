import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAssets';
  routeHome =  {linkName: 'Home', url: 'home'};
  routeAddEntry = {linkName: 'AddEntry', url: 'add-entry'};
  routeShowEntries = {linkName: 'ShowEntries', url: 'show-entries'};
/*
  routes = [
    {linkName: 'Home', url: 'home'},
    {linkName: 'AddEntry', url: 'add-entry'},
    {linkName: 'ShowEntries', url: 'show-entries'}
  ]
  */
}
