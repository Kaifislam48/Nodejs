const {add}=require("./add");
const sub=require("./subtraction");
const {mul}=require("./multiplication");

let res = add(2, 4);
let res2 = sub(10, 5);
let res3 = mul(2, 3);

console.log("The sum is: " + res);
console.log("The difference is: " + res2);
console.log("The product is: " + res3);