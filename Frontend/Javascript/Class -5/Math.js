//Examples:

//print 5 to 1

for(let i = 5; i>=1;i--){
    console.log(i);
}

//Syntax :- for(initialization , condition , increment/decrement) {
            // code to be execution
// }

//A loop inside another loop

for(let i = 1; i<=5 ; i++){ 
   for(let j = 1; j<=2 ; j++){
    console.log(j);
         }
         console.log(i);
         
}

//Pattern printing

for(let i = 0; i<=5 ; i++){
    let pattern  = "";
    for(let j = 1; j <=i ; j++){
        pattern += "*" ;
    }
    console.log(pattern);
    
}

