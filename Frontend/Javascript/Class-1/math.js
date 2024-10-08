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

let male = "true";
let age = 22;
if(age >= 22 && male == "true"){
    console.log("he can able to marry");
}

//


//task

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

//print all the vowels

let char = "y";

if(char === "a,e,i,o,u")
{
    console.log("vowels");

}
else{
    console.log("not vowel");
}
//
let c = "t";
if(c== "a" || c=="e" || c=="i" || c=="o" || c=="u" ){
    console.log("vowel");
}
else{
    console.log("not vowel");
}

//

let ch = "i";

switch(ch){
    case "a":
        console.log("vowel");
        break;
        case "e":
            console.log("vowel");
            break;
            case "i":
                console.log("vowel");
                break;
                case "o":
                    console.log("vowel");
                    break;
                    case "u":
                        console.log("vowel");
                        break;
                        default:
                            console.log("not vowel");

}

let day = "3";

switch(day){
    case "1":
        console.log("Monday");
        break;
        case "2":
            console.log("Tuesday");
            break;
            case "3":
                console.log("Wednesday");
                break;
                case "4":
                    console.log("Thrusday");
                    break;
                    case "5":
                        console.log("Friday");
                        break;
                        case "6":
                        console.log("Saturday");
                        break;
                        case "7":
                        console.log("Sunday");
                        break;

                        default:
                            console.log("invalid");

}


//task

let Month = "2";

switch(Month){
    case "1":
        console.log("January");
        break;
        case "2":
            console.log("February");
            break;
            case "3":
                console.log("March");
                break;
                case "4":
                    console.log("April");
                    break;
                    case "5":
                        console.log("May");
                        break;
                        case "6":
                        console.log("June");
                        break;
                        case "7":
                        console.log("July");
                        break;
                        case "8":
                        console.log("August");
                        break;

                        case "9":
                        console.log("September");
                        break;

                        case "10":
                        console.log("October");
                        break;

                        case "11":
                        console.log("November");
                        break;

                        case "12":
                        console.log("December");
                        break;

                        default:
                            console.log("invalid");

}














