a = 10.32
b = "Hello World"
console.log(typeof(a), typeof(b)) // number string

//All Integer, float, decimal numbers in JavaScrip are considered as number data type. Similarly, all characters, strings are considered as string data type.
//In JavaScript, we don't have to declare the data type of the variable. JavaScript automatically converts the variable to the correct data type.

//Secondary Datatypes : Boolean, Null, Undefined, Array and Object
//Boolean : True or False


object1 = {
    "firstName": "John",
    lastName: 'Doe',
    objec2: { "city": "New York", "state": "NY" },
    age: 50,
    "interests": ["reading", "music", "movies"]
}

console.log(object1.objec2.state)

//Set

set1 = new Set('world')
set1.add(10)
set1.add(10)
set1.add('hello')
console.log(set1)
console.log(set1.has(10))