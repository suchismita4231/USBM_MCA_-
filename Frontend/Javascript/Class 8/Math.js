//  //Concat:
 
//  let fruits1 = ["Apple" , "Orange" , "Strawberry"];
//  let fruits2 = ["Litchi", "Banana"];
//  let fruits = fruits1.concat(fruits2);
//  console.log(fruits);

//  let students = ["Mona" , "Ashish", "smruti","Suchi"];
//  let student = students.includes("Mona");
//  console.log(student);

//  //Slice()
//  const animals = ["ant", "elephant", "tiger", "lion", "dragon"];
//  const slice = animals.slice(3,4);
//  console.log(slice);


const months = ["Jan", "Feb", "Mar", "Apr", "May"];
months.splice(2,3,"june");
console.log(months);

const gram = ["A","E","I","O","U"];
gram.splice(1,2,"A","B");
console.log(gram);

//ForEach()
const a2 = [1,2,3,4,5];
//Double the no of array 2
for(let i = 0; i<a2.length; i++){
    const double = a2[i]*2;
    a2[i] = double;
}
a2.forEach(element => {
    console.log(element);
});

// or

const names = [4,3,2];
let mul = 4;
let newNames = names.map(value => value * mul);
console.log(newNames);
