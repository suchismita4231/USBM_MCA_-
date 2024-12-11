// Q-1 : Write a program that calculates the sum of all digits of a given number using a loop.

//Dryrun
// let number = parseInt(prompt("Enter a number:"));//convert input to integer
//     let total = 0;
//     let num = Math.abs(number);//Handle negative numbers


//     for(let i=num; i>0 ; i=math.floor(i/10)){
//         total += i % 10; //Add the last digit to the total
//     }

// console.log("the sum of all digits is =", total);

// Q-2 : Print the fibbonacci series up to a given number of terms.

// let term = 23 ;
// let t1 = 0 , t2 = 1;
// for(let i=1 ; i<=term; i++){
//     console.log(t1);
//     let nextTerm = t1 + t2;
//     t1 = t2;// t2 value is assigned by t1
//     t2 = nextTerm;
// }

//Q-3 : Write a program that prints the multiplication table of a number using a for loop.

// let num1 = 54;
// let num2 = 10;
// console.log(`Multiplication table of ${num1}:`);
// for(let i=1; i<=num2; i++){
//     let mul = i*num1;
//     console.log(`${num1} * ${i} = ${mul}`);
// }

//Q-4:  Write a program that prints the first n prime numbers.

// const readline = require('readline');

//  const rl = readline.createInterface({
//      input: process.stdin,
//      output: process.stdout
//  });

//  rl.question("Enter the number of prime numbers to print: ", (input) => {
//      let n = parseInt(input); 
//      let count = 0; 
//      let num = 2;  

//      console.log(`First ${n} prime numbers:`);

//      for (count = 0; count < n; ) {
//          let isPrime = true;


//          for (let i = 2; i <= Math.sqrt(num); i++) {
//              if (num % i === 0) {
//                  isPrime = false; // Not a prime
//                  break;
//              }
//          }

//          if (isPrime) {
//              console.log(num);  
//              count++; 
//          }

//          num++;  
//      }

//     });


//Q-5 : Floyd's Triangle . 

// console.log("Floyd's Triangle");
// let count = 1;
// for(let i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         console.log(count + " ");
//         count++;
//     }
  
// }

// Q1:

for(let i = 1; i<=5 ; i++){
    let pattern = ""; // empty space
    for(let j = 1 ; j<=i; j++){
        pattern += "*";
    }
    console.log(pattern);
}

// Q2:

for(let i = 5; i>=1 ; i--){
    let pattern = ""; // empty space
    for(let j = 1 ; j<=i; j++){
        pattern += "*";
    }
    console.log(pattern);
}

// Q3:

let row = 5;

for(let i =1; i<=row; i++){
    let pattern = "";// empty space

    for(let j=1; j<=row -i; j++){
        pattern += " ";

    }
    for(let j=1; j<= (2 * i - 1 ); j++){
        pattern += "*";
    }
    console.log(pattern);
}

// Q4:

let rows = 5;


for (let i = rows - 1; i >= 1; i--) {

    for (let j = 1; j < i; j++) {
        process.stdout.write(' ');  
    }


    for (let j = 1; j <= (2 * rows - (2 * i - 1)); j++) {
       let  pattern =  "*"; 
    }

    console.log();  
}
for (let i = 1; i <= rows; i++) {

    for (let j = 1; j < i; j++) {
        let pattern = " ";  
    }


    for (let j = 1; j <= (2 * rows - (2 * i - 1)); j++) {
       let pattern = "*";  
    }

    console.log();  
}

// Q5:

let Row = 5;
 let pattern = "*" .repeat(Row);
console.log(pattern);


for (let i = 1; i <= Row - 2; i++) {
    pattern = " *"; 
    for (let j = 1; j <= Row - 2; j++) {
        pattern += " "; 
    }
    pattern += " *"; 
    console.log(pattern);
}


pattern = "*".repeat(Row);
console.log(pattern);
