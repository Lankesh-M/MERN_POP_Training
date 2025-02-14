// Looping Statements
// 1. for(;;) loop
// 2. while loop
// 3. do while loop
// 4. for in loop
// 5. for of loop
// 6. for Each loop

// For in Loop
// The for...in loop is used to loop through an object's properties.
//Examples : 
array = [1, 2, 3, 4, 5, "Hello", "World", "brave", "new", "world",];
for (let i in array) {
    console.log(i, array[i])
}
obj = {
    "firstName": "John",
    lastName: 'Doe',
    objec2: { "city": "New York", "state": "NY" },
    age: 50,
    "interests": ["reading", "music", "movies"]
}

for(let i of array) {
    console.log(i);
}
//Task 1

for({key, value} of Object.entries(obj)) {
    console.log(key, value)
}

// Why is the above code not working? ans : Object.entries() is not a function. how to fix the code? 