
//questions - 1

let foodPrice = 250;
let drinkPrice = 100;

let totalBill = foodPrice + drinkPrice ; //250 + 150 = 350
let tip = totalBill * 0.10 ; //350 * 0.10 = 35;

let finalAmount = totalBill + tip ; //350 + 35 = 385;

console.log(`The final amount is ${finalAmount}`);

//Question - 2

let originalPrice = 800;
let discount = 150;

let finalPrice = originalPrice - discount; //800 - 150 = 650;

console.log(`The final Price is ${finalPrice}`);

//Question - 3

let productPrice = 300;
let taxRate = 8;
let taxAmount = productPrice * taxRate / 100 ;
//300*8/100 = 24;
taxAmount = 24;

let totalPrice = productPrice + taxAmount ; 
// 300 + 24 = 324;

console.log(`The total Price is ${totalPrice}`);
