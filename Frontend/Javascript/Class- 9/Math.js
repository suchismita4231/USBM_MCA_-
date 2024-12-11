let arr = ["A" , "B" , "C","D","E","F","T"];

// // for(let i=0; i<arr.length; i++){
// //     console.log(arr[i]);
// // }

// // using forEach();
// arr.forEach((e) =>{
//     console.log(e);
// })

//Map();
// arr.map((e) =>{
//     // console.log(e);
//     console.log(e.toLowerCase());
// });

// const newArray = arr.map((e) =>{
//     return e.toLowerCase();
// });
// console.log(newArray);

// filter();
// let newArray = [1,2,3,4,5,6,7,8,9];
// //Filter out the odd numbers

// const a = newArray.filter(num => num % 2 != 0);
// console.log(a);//Output

// const numbers = [1, 2, 3, 4, 5];

// // Filter out even numbers
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); // Output: [2, 4]

 //Or(using parameter)

// const odd = newArray.filter((e) =>{
//     return e % 2!= 0;
// })
// console.log(odd); // Output: [1,3,5,7,9]

//Object

// let student = {
//     name: "Suchi",
//     age: 22,
//     batch : "MCA(SEC-B)",
    
// }
// console.log(typeof student);
// console.log(student);
// console.log(student.age);

// let students = ["s",45,"male"];
// console.log(typeof students);

// //Using constructor create object
const student = new Object();
 student.name = "Lija";
 student.age = 15;
 student.batch = "+2";
 console.log(student);

//Accessing element
//Bracket notation
//Dot

//Ex: WAnt to access student name?

console.log(student["name"]);
console.log(student.name);

//Modify element

let person = { name: 'Alice', age: 25 };

let updatedPerson = Object.assign({}, person, { age: 30 });
let updatedPeron = Object.assign({}, person, {name : 'Alibha'} ,{ age: 30 });

console.log(updatedPeron); // Output: { name: 'Alice', age: 30 }

