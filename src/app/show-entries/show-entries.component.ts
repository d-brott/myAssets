import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { IAsset } from '../database';

@Component({
  selector: 'app-show-entries',
  templateUrl: './show-entries.component.html',
  styleUrls: ['./show-entries.component.css']
})
export class ShowEntriesComponent implements OnInit {
  private riskFreeEntries: Map<number, IAsset> = new Map<number, IAsset>();
  private riskyEntries: Map<number, IAsset> = new Map<number, IAsset>();

  private sumRiskFree: number = 0;
  private sumRisky: number = 0;

  constructor(private databaseService: DatabaseService) {
    this.getAllAssets();
  }

  ngOnInit() { }

  public getAllAssets() {
    this.databaseService.get(map => {
      map.forEach((value: IAsset, key: number) => {
        console.log(value.category);
        if (value.category == "risk-free") {
          this.riskFreeEntries.set(value.id, value);
          this.sumRiskFree += value.amount;
        } else if (value.category == "risky") {
          this.riskyEntries.set(value.id, value);
          this.sumRisky += value.amount;
        }
      });
    });
  }



  public clearDatabase() {
    this.databaseService.clear();
  }

}
