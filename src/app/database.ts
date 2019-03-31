import  Dexie  from 'dexie';
import { Asset } from './asset';

export class Database extends Dexie {
    assets: Dexie.Table<IAsset, number>
  
    constructor() {
      super("Database");
      
      this.version(1).stores({
        assets: "++id, category, asset, amount"
      });

      this.assets.mapToClass(Asset);

      this.assets = this.table("assets");
    }
  }
  
  export interface IAsset {
    id?: number;
    category: string;
    asset: string;
    amount: number;
  }
  
  
  