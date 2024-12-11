// //Mathematical operator

// // let num1 = 5;
// // let num2 = 3;
// // let result = num1 + num2; //Addition operator
// // // let result = num1 - num2; //substraction
// // // let result = num1 * num2; //multiplication
// // // let result = num1 / num2; //division

// // //Modulo operator

// // let num = 34;
// // let even = num % 2;
// // console.log(even);

// // //Relational operator
// // //To compare two values
// // console.log(12>6);
// // console.log(!34);
// // console.log(!5 != "5");

// //Falsy value
//  //false , 0 , -0 , "" ,'' , null ,undefined , NaN

// //  if(-100){
// //     console.log("It is true");
// //  }

// //Task

// //Given total_bill , discount_start_price if you satisfy the condition print discount
// //Available otherwise print no discount

// let total_bill = 400;


// if(total_bill <=400){
//     console.log("discount available");
// }
// else{
//     console.log("not available");
// }

// // check if (male) and then check (22+) then he can able to marry

// let male = "true";
// let age = 22;
// if(age >= 22 && male == "true"){
//     console.log("he can able to marry");
// }

// //


// //task

// let age1 = 23;

// if(age1>=18){
//     console.log("adult");
// }
// else if(age1>=60){
//     console.log("senior")
// }
// else{
//     console.log("Minor");
// }

// //print all the vowels

// let char = "y";

// if(char === "a,e,i,o,u")
// {
//     console.log("vowels");

// }
// else{
//     console.log("not vowel");
// }
// //
// let c = "t";
// if(c== "a" || c=="e" || c=="i" || c=="o" || c=="u" ){
//     console.log("vowel");
// }
// else{
//     console.log("not vowel");
// }

// //

// let ch = "i";

// switch(ch){
//     case "a":
//         console.log("vowel");
//         break;
//         case "e":
//             console.log("vowel");
//             break;
//             case "i":
//                 console.log("vowel");
//                 break;
//                 case "o":
//                     console.log("vowel");
//                     break;
//                     case "u":
//                         console.log("vowel");
//                         break;
//                         default:
//                             console.log("not vowel");

// }

// let day = "3";

// switch(day){
//     case "1":
//         console.log("Monday");
//         break;
//         case "2":
//             console.log("Tuesday");
//             break;
//             case "3":
//                 console.log("Wednesday");
//                 break;
//                 case "4":
//                     console.log("Thrusday");
//                     break;
//                     case "5":
//                         console.log("Friday");
//                         break;
//                         case "6":
//                         console.log("Saturday");
//                         break;
//                         case "7":
//                         console.log("Sunday");
//                         break;

//                         default:
//                             console.log("invalid");

// }


// //task

// let Month = "2";

// switch(Month){
//     case "1":
//         console.log("January");
//         break;
//         case "2":
//             console.log("February");
//             break;
//             case "3":
//                 console.log("March");
//                 break;
//                 case "4":
//                     console.log("April");
//                     break;
//                     case "5":
//                         console.log("May");
//                         break;
//                         case "6":
//                         console.log("June");
//                         break;
//                         case "7":
//                         console.log("July");
//                         break;
//                         case "8":
//                         console.log("August");
//                         break;

//                         case "9":
//                         console.log("September");
//                         break;

//                         case "10":
//                         console.log("October");
//                         break;

//                         case "11":
//                         console.log("November");
//                         break;

//                         case "12":
//                         console.log("December");
//                         break;

//                         default:
//                             console.log("invalid");

// }













// //Class 4

//Math in js
//

//  let num1 = 23;
//  let num2 = 34;
//  let Addition = num1 + num2 ;
// //  console.log(Addition);


// console.log(Math.round(Addition));
// console.log(Math.PI);
// console.log(Math.round(12.000012));

// //Square root

// console.log(num1 ** 2);
// console.log(Math.sqrt(16));
// console.log(Math.pow(35 , 2)); //two parameter are required for power 


//ceil value
// console.log(Math.ceil(325.49));//326
// console.log(Math.ceil(367.10));

// //Floor value
// console.log(Math.floor(325.49));//325
// console.log(Math.floor(345.79));//345

//round value
// console.log(Math.round(325.85));//326
// console.log(Math.round(325.5));

//Max

// console.log(Math.max(10,20,30,40));

// console.log(Math.abs(-10));
// console.log(Math.abs(-0.5465468769));

// //Random(0-1)

// console.log(Math.random());

//Write a program to print random numbers between 5 to 27

// console.log(Math.floor(Math.random() *(27-5+1)+5));

// let start = 5;
// let end = 27;
// (end - start ) +1 -> to find out the number

// let totalNumbers = (end - start ) + 1;//23
// console.log(totalNumbers);
// console.log(Math.random() * totalNumbers);//13.157614543261044
// console.log(Math.random() * totalNumbers);//6.312895243479626
// console.log(Math.random() * totalNumbers);//2.029125448126229

//5 to 27

// console.log(Math.random() * totalNumbers) +start;

// let random_number = Math.floor(Math.random() * totalNumbers + start); 
// console.log(random_number);

//Dates - To create date object

// let date = new Date();

// console.log(date);//2024-10-15T05:43:14.979Z(UTC/ISO)

// console.log(date.toISOString());
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getMinutes());
// console.log(date.getHours());
// console.log(date.getSeconds());
// console.log(date.getMonth() + 1);
// console.log(date.getDay());

console.log(Math.ceil(0.2499999));