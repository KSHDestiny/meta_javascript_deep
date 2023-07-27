export const name = "I'm Rectangle";
export const width = 15;
export const height = 30;

export const area = (w, h) => w * h;

// ! import * as rec from "./export.js";
// * rec is an object and * means all. That means all variables using export keyword in export.js are inside rec object and have to use rec.variable
// console.log(rec.shapeName);
// console.log(rec.shapeWidth);
// console.log(rec.area(rec.shapeWidth, rec.shapeHeight));
