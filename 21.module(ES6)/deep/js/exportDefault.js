class SQUAREROOT {
  testName = "I'm square root";
  squareRoot = (num) => Math.sqrt(num);
}

const testing = "This is testing";

export default { SQUAREROOT, testing };
// ! import ExpDefault from "./exportDefault.js";
// * ExpDefault is an object. ExpDefault object only contains variable from export default. Notice that variables don't need export keyword for themself respectively.
// const sq = new ExpDefault.SQUAREROOT();
// console.log(sq.squareRoot(16));
// console.log(ExpDefault.testing);
