//USER INPUT & CONDITIONAL STATEMENT

/* Question 1
Write a program to take "city" name as input from user.
if user enters "Karachi", welcome the user like this:
"Welcome to city of lights"
---------------------------------------------------------*/

// var city = prompt("Please enter your city name");

// if (city == "Karachi"){
//     document.write("Welcome to city of lights");
// }


/*Question 2
---------------*/
// var gender = prompt("What is your Gender");
// if (gender == "male"){
//     document.write("Good Morning Sir");
// }
// if (gender == "female"){
//     document.write("Good morning Ma'am");
// }



/*Question 3
--------------*/

// var signalColor = prompt("Enter traffic signal's Light Color");
// var message;

// if (signalColor == "Red") {
//     message = "Must Stop";
//     document.write(message);
// }
// if (signalColor == "Yellow") {
//     message = "Ready to move";
//     document.write(message);
// }
// if (signalColor == "Green") {
//     message = "Move now";
//     document.write(message);
// }




/*Question No 4
-----------------*/

// var remainingFuel = +prompt("Please write you remaining fuel in the car in litres",);
// if(remainingFuel < 0.25){
//     alert("Please refill the fuel in your car");
// }




/* Question No 5
-----------------*/
// var a =4;
// if(++a === 5){
//     alert("given codition for variable a is true");
// }

// var b = 82;
// if (b++ ===83){
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ ===13){
//     alert("condition 1 is true");
// }

// if(++c < 14){
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if(totalCost ===laborCost + materialCost){
//     alert("The cost equals");
// }

// if(true){
//     alert("True");
// }

// if(false){
//     alert("False");
// }

// if ("car" < "cat"){
//     alert("car is smaller than cat");
// }

/* Lessthan and Greathen logic also 
works in alpahbet characters
e.g "a" < "b", "n" > "m"
-----------------------------*/

// if("abe" >"abc" ){
//     alert("abe is greater than abc");
// }

// if("lmm" > "lmn"){
//     alert("lmm is greater than lmn");
// }
// else{
//     alert("lmm is less than lmn");
// }


/* Question No 6 
------------------*/
// var chemMarks = +prompt("Enter chemistry marks",);
// var pyhsicsMarks = +prompt("Enter physics marks",);
// var bioMarks = +prompt("Enter biology marks",);
// var totalObtainedMarks = chemMarks + pyhsicsMarks + bioMarks;
// var totalMarks = 300;
// var percentage = totalObtainedMarks / totalMarks * 100;

// var grade;
// var remarks;


// /*------logic test for Fail--------*/
// if (percentage < 60) {
//     grade = "Fail";
//     remarks = "Sorry";
    
//     alert("Chemistry Marks: " + chemMarks +
//         "\nPhysics Marks: " + pyhsicsMarks +
//         "\nBiology Marks: " + bioMarks +
//         "\nTotal marks: 300 \nMarks obtained: " + totalObtainedMarks +
//         "\nPercentage: " + percentage +
//         "% \nGrade: " + grade +
//         "\nRemarks: " + remarks);
// }


// /*------logic test for B Grade--------*/
// if (percentage >= 60 && percentage < 70) {
//     grade = "B";
//     remarks = "You need to improve";

//     alert("Chemistry Marks: " + chemMarks +
//         "\nPhysics Marks: " + pyhsicsMarks +
//         "\nBiology Marks: " + bioMarks +
//         "\nTotal marks: 300 \nMarks obtained: " + totalObtainedMarks +
//         "\nPercentage: " + percentage +
//         "% \nGrade: " + grade +
//         "\nRemarks: " + remarks);
    
// }


// /*------logic test for A Grade--------*/
// if (percentage >= 70 && percentage < 80) {
//     grade = "A";
//     remarks = "Good";
    
//     alert("Chemistry Marks: " + chemMarks +
//         "\nPhysics Marks: " + pyhsicsMarks +
//         "\nBiology Marks: " + bioMarks +
//         "\nTotal marks: 300 \nMarks obtained: " + totalObtainedMarks +
//         "\nPercentage: " + percentage +
//         "% \nGrade: " + grade +
//         "\nRemarks: " + remarks);

// }

// /*------logic test for A-one Grade--------*/
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";

//     alert("Chemistry Marks: " + chemMarks +
//         "\nPhysics Marks: " + pyhsicsMarks +
//         "\nBiology Marks: " + bioMarks +
//         "\nTotal marks: 300 \nMarks obtained: " + totalObtainedMarks +
//         "\nPercentage: " + percentage +
//         "% \nGrade: " + grade +
//         "\nRemarks: " + remarks);
// }


/*Question No 7
--------------------*/
// var secretNum = 8;
// var guessNum = +prompt("Guess the secret number from 1 to 10,");
//case a 
//if(guessNum == secretNum){
//     alert("Bingo! Correct answer");
// }
// case b
//if(++guessNum ==secretNum){
//     alert("Close enough to the correct answer");
// }


/*Questoin No 8
-------------------*/
// var numDiv3 = +prompt("Enter any number to check divisible by 3 or not");
// if (numDiv3 % 3 == 0){
//     alert("The number " + numDiv3 + " is divisible by 3");
// }
// else{
//     alert("The number " + numDiv3 + " is not divisible by 3");
// }


/*Question No 9
--------------------*/

// var numCheck = +prompt("Enter a number to check EVEN or ODD");
// if(numCheck%2 ==0){
//     alert("The number "+ numCheck +" is EVEN");
// }
// else{
//     alert("The number " + numCheck + " is ODD");
// }


/*Question No 10
---------------------*/

// var Temp = +prompt("Enter temperature");

// if(Temp > 40){
//     alert("It is too hot outside");
// }

// if(Temp > 30 && Temp <40 ){
//     alert("The Weather today is Normal");
// }

// if(Temp > 20 && Temp < 30 ){
//     alert("Today's Weather is cool");
// }

// if(Temp > 10 && Temp < 20 ){
//     alert("OMG! Today's weather is so Cool");
// }



/* Question No 11
--------------------*/

var FirstNum = +prompt ("Enter first number");
var SecondNum = + prompt("Enter second number");
var operation = prompt("Enter the operation what you want");
var compute ;
if(operation === "+"){
    alert(FirstNum + SecondNum);
}

if(operation == "-"){
    alert(FirstNum - SecondNum);
}

if(operation == "*"){
    alert(FirstNum * SecondNum);
}

if(operation == "/"){
    alert(FirstNum / SecondNum);
}

if(operation == "%"){
    alert(FirstNum % SecondNum);
}
