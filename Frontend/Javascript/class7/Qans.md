let cities = ["Balasore", "Cuttack","Jajpur","Bhadrak"];
## Push()
-> Adds one or more elements to the end of the array.
-> Return new length of the array.
-> It is faster than unshift().
-> It add element to an empty array.
-> It is browser compactible that means it supported in modern browser(IE6+).
->It is used in DS(Data Structure).\
->We can add multiple elements to an array using this i.e arr.push(1,2,3)
# Example:-
console.log(cities);
let aC ="Baripada";
cities.push(aC);
console.log(cities);
## Pop()
-> Remove last element from the array.
-> Returns the remove element.
-> It is faster than shift().
-> It return undefined when caleed on an empty array.
-> It is browser compactible that means it supported in modern browser(IE6+).
->It is used in DS(Data Structure).
->We can use pop with only one element.
# E.g:-
console.log(cities);
let rC ="Baripada";
cities.pop(rC);
console.log(cities);
## Shift()
->Removes the first element from the array.
-> Returns the removed element.
-> It is slower than pop().
-> It add element to an empty array.
-> It is browser compactible that means it supported in modern browser(IE6+).
->It is less common in Data Structure.
->We can use pop with only one element.
# E.g:-
console.log(cities);
let sC ="Baripada";
cities.shift(sC);
console.log(cities);
## Unshift()
-> Adds one or more elements to the beginning of the array.
-> Returns the new length of the array.
-> It is slower than push().
-> It return undefined when caleed on an empty array.
-> It is browser compactible that means it supported in modern browser(IE6+).
->It is less common in Data Structure.
->We can add multiple elements to an array using this i.e arr.unshift(1,2,3)
# E.g:-
console.log(cities);
let uC ="Baripada";
cities.unshift(uC);
console.log(cities);