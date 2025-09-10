import {NumberSeries, type BaseOp} from "./NumberSeries.js"

export class NumberSeries2 extends NumberSeries{
    div(){
        return this._list[0]
    }
}

const s = new.NumberSeries2(10,4);
