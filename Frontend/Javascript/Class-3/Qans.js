//que-1 :- what does math.floor() do in js?
//Ans :- Math.floor() is a predefined function in js ,used to rounds down in an integer which is just previous or equal to the given number.
     console.log(Math.floor(26.21));//26
     console.log(Math.floor(-26.97));//27

//Que - 2:- How would you generate random number between 1-100

// We use random() to generate a random number i.e. Math.random(). If we print this then it will returns between 0-1 where 0 is inclusive and 1 is exclusive . This function always returns a floating-point number. consider between 1-100 and we can write console.log(Math.random() * (100-1+1)+1) , it will be print random number between 1 to 100, it return floating point value so to remove the floating point we can use floor method.

console.log(Math.floor(Math.random() * (100-1+1)+1));

//Que - 3  :- What is the purpose of Math.ceil()? Give an example.

// The Math.ceil() rounds the number upto the next integer that is greater than the number itself. It returns the smallest integer greater than or equal to a given number.

//Example -

console.log(Math.ceil(345.43)); //346
console.log(Math.ceil(345)); //345
console.log(Math.ceil(0)); //0
console.log(Math.ceil(-569.87));//-569

//Que - Explain how Math.pow(2,3) works and what the output will be.

//Ans :- used to find the power of a number. It takes two parameters one is base and another is component. Here 2 is base and 3 is component . This is read as 2 raised to the power of 3. here the output is 8.
console.log(Math.pow(2,3));//8

//Que- 4 :-What is the value of Math.PI?

console.log(Math.PI);//3.141592653589793

//Tasks :-

// 1 :- Generate a random number between 1-100

console.log(Math.floor(Math.random() * (100-1+1)+1));

// 2 :- Round the number 6.75 down to the nearest integer.
console.log(Math.floor(6.75));

//3 :- Round the number 9.12 up to the nearest integer.

console.log(Math.ceil(9.12));

//4:- Generate the random numnber between 5-27(inclusive)

console.log(Math.floor(Math.random() *(27-5+1)+5));

// 5 :-Add 5 days to the currnet days

let cd =new Date();
console.log(cd.getDay());//3
console.log(cd.getDay() + 5);//8

//6 :-Get the number of milliseconds between january 1, 2023 and today.

let givenDate = new Date(2023,1,1);
let currnetDate = new Date();
 
let betDate = currnetDate - givenDate;
console.log(betDate );//53889241406

//7 :- Get the current hour

let ch = new Date();
console.log(ch.getHours());//17

//8 :- create a date for january 1 , 2025. 

let date = new Date();

let ans = new Date(2025,0,1);
console.log(ans);

//9 :- Get the current day of the week

let currDay = new Date();
console.log(currDay.getDay());//3 for Wednesday

//10 :- Get the current month

let currMonth = new Date();
console.log(currMonth.getMonth());// 9 for october
console.log(currMonth.getDate());//16

//11 :- What is the difference between  getDate() and getDay()?

// getDate() is a function which returns the date of a month and getDay() is a function which returns day of a week.