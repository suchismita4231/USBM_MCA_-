Concentration :- (Merge)
//Concat:
Ex - let fruits = ["Apple , "Orange" , "Strawberry"];
fruits.concat(["Litchi"]);
console.log(fruits);

The includes() method of array instances determines whether an array includes a certain value among its entities , returning true or false as appropriate.

The slice() method of array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not encluded) where start and end represent the index of items in that array. The original array wilkl not be modified.

Ex :  const animals = ["ant", "elephant", "tiger", "lion", "dragon"];
 const slice = animals.slice(3,4);
 console.log(slice); //output:["lion"]

 To create a new array with a segment removed and/or replaced without mutating the original array , use tospliced() . to access the original array with modifying it , see slice().

 