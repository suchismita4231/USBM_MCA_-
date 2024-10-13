
// //questions - 1

// let foodPrice = 250;
// let drinkPrice = 100;

// let totalBill = foodPrice + drinkPrice ; 
// //250 + 150 = 350
// let tip = totalBill * 0.10 ; 
// //350 * 0.10 = 35;

// let finalAmount = totalBill + tip ; 
// //350 + 35 = 385;

// console.log(`The final amount is ${finalAmount}`);

// //Question - 2

// let originalPrice = 800;
// let discount = 150;

// let finalPrice = originalPrice - discount; 
// //800 - 150 = 650;

// console.log(`The final Price is ${finalPrice}`);

// //Question - 3

// let productPrice = 300;
// let taxRate = 8;
// let taxAmount = productPrice * taxRate / 100 ;
// //300*8/100 = 24;
// taxAmount = 24;

// let totalPrice = productPrice + taxAmount ; 
// // 300 + 24 = 324;

// console.log(`The total Price is ${totalPrice}`);


//

//readline is a module and also part of Node.js . This module provides an interface bfor reading data from readable stream.
const readline = require("readline");//this line rsprnt the importing of readline module

const r1 = readline.createInterface({
    input: process . stdin , //for reading input from user input
    output: process .stdout //for showing output in terminal
});
// rl.question(`What is your name?` , (name) =>{
//     console.log(`hii i am ${name}`);

// });


// //Question - 3

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process . stdin , //for reading input from user input
//     output: process .stdout ,//for showing output in terminal
// });
// let item1 ;

// rl.question("Enter item1" , (input1) =>{
//     item1 = parseInt(input1);

//     if (item1 % 2 === 0){
//         console.log("This is even" , item1);
//     }
//     else
//     {
//         console.log("This is odd", item1);
//     }
// })

//Print Month 

    // //let number;
//     r1.question (`Enter a number between 1-12 :`, (input2)=>{
//      let  number = parseInt(input2);
   

// switch(number){
//     case 1:
//       console.log("January");
//        break;

//             case 2:
//                 console.log("February");
//                 break;
//             case 3:
//                 console.log("March");
//                 break;
//             case 4:
//                 console.log("April");
//                 break;  
//             case 5:
//                 console.log("May");
//                 break;
//             case 6:
//                 console.log("June");
//                 break;
//             case 7:
//                 console.log("July");
//                 break;
//             case 8:
//                 console.log("August");
//                break;
//             case 9:
//                 console.log("September");
//               break; 
             
//             case 10:
//                 console.log("October");
//              break; 
//             case 11:
//                 console.log("November");
//             break; 
//             case 12:
//                 console.log("December");
//                 break;
//                default:
//                 console.log ( "invalid, Enter the correct number" );


// }

// })

//Print week

// let days;
r1.question (`Enter the days between 1-7:` , (input3) =>{
    let days = parseInt(input3);
    switch(days){
        case 1:
            console.log("Monday");
            break;
            case 2:
                console.log("Tuesday");
                break;
                case 3:
                    console.log("Wednesday");
                    break;
                    case 4:
                        console.log("Thrusday");
                        break;
                        case 5:
                            console.log("Friday");
                            break;
                            case 6:
                            console.log("Saturday");
                            break;
                            case 7:
                            console.log("Sunday");
                            break;
    
                            default:
                                console.log("Sorry , enter correct number of days");


                                
    }
})

