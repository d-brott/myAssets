import { Injectable } from '@angular/core';
import { Database, IAsset } from './database';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db = new Database();

  constructor() { }

  add(nCategory: string, nAsset: string, nAmount: number) {
    this.db.assets.add({
      category: nCategory,
      asset: nAsset,
      amount: nAmount
    });
  }

  clear() {
    this.db.assets.clear();
  }

  get(callback) {
    let map: Map<number, IAsset> = new Map<number, IAsset>();

    this.db.assets.each(asset => {
      map.set(asset.id, asset);
    }).then(() => {
      callback(map);
    });
  }

}



