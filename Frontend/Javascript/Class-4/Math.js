//Iteration :- 

//Print from 1-10

// let sn = 1;
// console.log(sn);

for(let i = 0; i<= 10; i++){
    console.log(i);
}

let num = 1 ; //declaration
console.log("Global:",num);//1


while(num <= 100){
    console.log("Block:",num);//print
    num ++;
    
}

console.log("Global:",num);//101

//DO .... WHILE Loop

// syntax:
// do{
//     code to be executed
// }while(consition);

//Ex: Asking for user to the correct input

let userAns ;

do{
    userAns = prompt("What is the capital of odisha?");
    console.log("Wrong");
}
while(userAns !== "Bhubaneswar");
console.log("Correct");



