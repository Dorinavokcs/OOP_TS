import { NumberSeries, type BaseOp } from "./NumberSeries.js";

export class NumberSeries2 extends NumberSeries{
    private _z: number;
    constructor(count: number, v: number, z: number){
        // A super() metódus meghívja az ősosztály konstruktorát azokkal a paraméterekkel, amelyeket átadun neki.
        // CSak akkor szükséges a super() használata, ha az ős osztály konstruktorát módosítani szeretnénk. A super() alatt írjuk meg a módosítást. Amennyiben a gyermek konstruktora több paramétert vár, mint a szülőé, úgy a constructor() paraméterei között azokat fel kell tüntetni pluszban. Erre példa a "z" paraméter!
        // Tehát a konstruktort is felül lehet írni!
        super(count, v);
        this._list = [1,2,3,4,5,6,7];
        this._z = z;
    }

    div() {
        return this._list[0];
    }

    override mode(): number {
        const statistic: Record<number, number> = {};
        for (let n of this._list) {
            statistic[n] = (statistic[n] ?? 0) + 1;
        }

        let best = this._list[0];
        for (const k in statistic)  {
            const key = Number(k);
            if (statistic[key]! < statistic[best!]!) {
                best = key;
            }
        }
        return best!;
    }
}


