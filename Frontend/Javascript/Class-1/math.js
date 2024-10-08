//Mathematical operator

// let num1 = 5;
// let num2 = 3;
// let result = num1 + num2; //Addition operator
// // let result = num1 - num2; //substraction
// // let result = num1 * num2; //multiplication
// // let result = num1 / num2; //division

// //Modulo operator

// let num = 34;
// let even = num % 2;
// console.log(even);

// //Relational operator
// //To compare two values
// console.log(12>6);
// console.log(!34);
// console.log(!5 != "5");

//Falsy value
 //false , 0 , -0 , "" ,'' , null ,undefined , NaN

//  if(-100){
//     console.log("It is true");
//  }

//Task

//Given total_bill , discount_start_price if you satisfy the condition print discount
//Available otherwise print no discount

let total_bill = 400;


if(total_bill <=400){
    console.log("discount available");
}
else{
    console.log("not available");
}

// check if (male) and then check (22+) then he can able to marry

let gender = "male";
let age = 22;
if(age >= 22 && gender == "male"){
    console.log("he can able to marry");
}

let age1 = 23;

if(age1>=18){
    console.log("adult");
}
else if(age1>=60){
    console.log("senior")
}
else{
    console.log("Minor");
}
