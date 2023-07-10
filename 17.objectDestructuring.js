// * In object Destructuring, using faulty spelling including lower case won't work.

let { PI } = Math; // Math.PI
console.log(PI);

// * The original property on the object and the destructured value are not connected in any way.
PI = 1;
console.log(`${PI} != ${Math.PI}`);
