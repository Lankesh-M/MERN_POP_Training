
// 3. Scope of Variables
var a = 10;
console.log(a);

{
    a += 20;
    console.log(a);
    let b = 40;  //Let can't be accesed - is local Scope
    var f = 100; //Var can be accessed outside the block - Global Scope
    const e = 50; //Const is local Scope

}
console.log(a); 
// console.log(b); //b is not defined - Error
console.log(f); //f is defined - 100
// console.log(e); //e is not defined - Error

x = 3;
console.log(x);
while (x < 10) {
    x++;
    console.log(x);
}
console.log(x); // x is defined - 10

// 4. Ternary Operator
// Syntax : condition ? expression1 : expression2

// 5. Spread Operator(...)
// The spread operator is used to split up array elements or object properties.
//Examples :        
let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [...arr, ...arr2];
console.log(arr3);
let obj1 = { "name": "John", "age": 30 };
let obj2 = { "city": "New York", "state": "NY" };
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//Reserach Task 1 -  Spread and Rest Operator difference? ans : Spread operator is used to split up array elements or object properties. Rest operator is used to merge a list of function arguments into an array.

// 6. Rest Operator(...)



// 7. Destructuring operator 
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var [a, b, c, ...d] = array;
console.log(a, b, c, d);
console.log(array);

// 8. Hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.

console.log(h);
var h = 10;  // var is hoisted, let and const are not hoisted
console.log(h);

funHoist();
funHoisting = () => {
    console.log("Hello World");
}
function funHoist() {
    console.log("Hello World");
}
