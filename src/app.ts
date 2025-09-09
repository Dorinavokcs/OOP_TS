type BaseOP : "sum"| "multiplier" | "mode"|"print";
class NumberSeries {
    
    //Attributumok, tulajdonságok (osztály változoi) rejtettek-private
    private _count: number; //Hány szám legyen a listában
    private _v: number; // A generált számok felső határa
    private _list: number[]; //a számok listája itt lesz
    

    //Konstruktor -létrehozza az obejektumot : inicializálja az attributumokat
    constructor(
        count: number,
        v: number,
        rng: (max: number)=> number //TODO
    ){
        if (count <= 0) throw new Error("Számosság pozitív egész legyen!");
        if(v <= 0 ) throw new Error("A felső határ pozitív égesz legyen")

            this._count = count;
            this._v = v;
            this._list = Array.from({length: count}, ()=>rng(v));
    }
    //Propertyk: get/set accesszorokkal (elérőkkel):
    get values():readonly number[]{
        return this._list;
    }
    //szetter: kontrollatlan adok erteke a propretynek
    set values(arr: number[]){
        if(arr.length ===0) throw new Error ("Nem lehet üres a lista")
        if(!arr.every(n=>Number.isFinite(n)&&n>0))throw new Error("Minden elem pouitiv egesz legyen")

        this._list = [...arr]; //Az array elemeinek a másolata kerul a _list-be! ez egy uj array lesz
        this._count =arr.length;
        this._v=Math.max(...arr)
    }
    //csak olvashato property-k:
    get count():number {return this._count};
    get v(): number {return this._v}

    //objektum metodusok:
    mode(): number{
        const statistic: Record<number, number>={}
        for(let n of this._list){
            statistic[n] = (statistic[n] ?? 0) + 1;
        }
        let best = this._list[0]
        for (const k of Object.keys(statistic)){
            const key = Number(k)
            if(statistic[key]!>statistic[best!]!){
                best = key
            }
        }
        return best!
    }
    sum(){return this._list.reduce((acc,n)=>acc+n), 0}
    multiplier(){return this._list.reduce((acc,n)=>acc*n),1}

    //rouzer ( switch- case ) sum, multiplier, mode, print
    run(op: BaseOp){
         switch(op){
            case "sum":
                console.log(`Összes: ${this.sum{}}`);
                break;
            case "multiplier":
                console.log(`Szorzat: ${this.multiplier{}}`);
                break;
            case "mode":
                console.log(`leggyakoribb...:${this.mod{}}`);
                break;
            case "print":
                console.log(`kiiras---:${}this.print{}`);
                break;
            default:
                console.log("helytelen muvelet");
                break;
         }
    }
    static help(): void{
        console.log("Elérhető műveletek: sum, multiplier, mode, print");
    }
}