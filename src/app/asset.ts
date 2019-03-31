import { IAsset } from './database';

export class Asset implements IAsset{
     id: number;
     category: string;
     asset: string;
     amount: number;

    constructor(category: string, asset: string, amount: number, id?:number) {
        this.asset = asset;
        this.amount = amount;
        this.category = category;
        if (id) this.id = id;
    }

    public getAsset(): String {
        return this.asset;
    }

    public getAmount(): Number {
        return this.amount;
    }

    public getCategory(): String {
        return this.category;
    }
}