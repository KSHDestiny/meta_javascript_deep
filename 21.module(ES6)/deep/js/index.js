import * as rec from "./export.js";
import ExpDefault from "./exportDefault.js";
import { destructure } from "./exportWithDestructure.js";

const sq = new ExpDefault.SQUAREROOT();
console.log(sq.squareRoot(16));
console.log(ExpDefault.testing);

console.log(rec.name);
console.log(rec.width);
console.log(rec.area(rec.width, rec.height));
console.log(destructure);

// console.log(testing);
