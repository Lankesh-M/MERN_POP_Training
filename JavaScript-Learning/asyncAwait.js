async function asAw(){
    console.log('Start');
}

// console.log(asAw());

// What is async and await in JavaScript? ans : async and await are used to handle asynchronous operations in JavaScript. 
// async is used to declare a function as asynchronous. await is used to wait for a promise to resolve or reject.

// What is the difference between async/await and promises? ans : async/await is built on top of promises. 
// async/await is more readable and easy to understand than promises.


async function asAw1 () {
    setTimeout(() => {
        console.log('Inside setTimeout');
    }, 5000);

}

console.log('End');
asAw1();
console.log('End');