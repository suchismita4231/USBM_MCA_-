//Que 1 :- Simple calculator with a loop

let n1 = parseInt(prompt("Enter the 1st number"));

let cal = prompt("Enter the operator");

let n2 = parseInt(prompt("Enter the 2nd number"));

switch(cal){
    case "+":
        console.log("Sum =" , n1 + n2);
        break;

        case "-":
            console.log(" Sub = ", n1-n2);
            break;

            case "*":
            console.log(" Mul = ", n1*n2);
            break;

            case "%":
            console.log(" Mod = ", n1%n2);
            break;

            case "/":
            console.log(" Div = ", n1/n2);
            break;

            default:
                console.log("invalid");
                break;
}

//Que 2 :- Guessing game

let randomNumber = Math.random() *100;
let number = Math.ceil(randomNumber);
while(true){
    let GuessNumber = parseInt(prompt("Guess the number"));

    if(GuessNumber === number)
    {
        console.log("Congratulations ! You find the right number.", number);
        break;
    }
    else if(GuessNumber > number){
        console.log("You are very close but it is bigger ");
    }
    else if(GuessNumber < number){
        console.log("You are very close but it is smaller ");
    }
    else{
        console.log("Sorry , Try again");
    }
}


//Que -3:- Word Counter

let S = prompt("Enter your sentence");
let count = 0;

for(let i=0; i<S.length ; i++)
{
  count++;
}
console.log("The total letter in the sentence :" , count)

//Que -4 :- Login attempt limit

let i = 1;

let password = "Suchi@909";

while(i <= 3){
    let Attempt = prompt("Enter your password and you have only 3 attemps");

    if(password === Attempt){
        console.log("Login successful");
        break;
    }
    else{
        console.log("Login failed");
        console.log(`You have only ${3-i} attempt.`)
    }
    i++;
}
console.log("It is locked");
