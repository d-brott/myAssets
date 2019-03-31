import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  private category: string;
  private asset: string;
  private amount: number;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() { }

  public addAsset() {
    this.databaseService.add(this.category, this.asset, this.amount);
  }  
}
