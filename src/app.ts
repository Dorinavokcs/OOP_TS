import {Numberseries, type BaseOp} from "./NumberSeries.js"
import { NumberSeries2 } from "./NumberSeries2.js";

//Statikus metodusok (osztalyhoz tartoznak):
NumberSeries.help();
console.log(NumberSeries.rand(8));

//példányozitas:
const n = new NumberSeries(30,8)
console.log(n.run("print"));
console.log(n.values);
n.values =[1000,100,100,100,1,2,3]
console.log(n.run("print"));
n.values=[-3,10]
console.log(n.run("print"));

console.log("*******************************************");
const s  = new NumberSeries2(10,7)
console.log(s.run("print"));
