/*-------------------------Chapters35-38-------------------------*/

/*-------------------------Question No 1-------------------------*/
function timeNow(){
    var nowTime = new Date();
    document.write(nowTime);
}

timeNow();

/*-------------------------Question No 2-------------------------*/
function greeting(firstName, lastName) {
  alert("Assalamo Alaikum " + firstName + " " + lastName);
}

greeting("Muhammad", "Shehbaz");

/*-------------------------Question No 3-------------------------*/
function addNumber(num1, num2) {
  var sum = num1 + num2;
  return sum;

}
document.write(addNumber(105, 35));

/*-------------------------Question No 4-------------------------*/
function calculator(num1, num2, operator) {
  var simplify;
  if (operator == "/") {
    simplify = num1 / num2;
  } else if (operator == "*") {
    simplify = num1 * num2;
  } else if (operator == "+") {
    simplify = num1 + num2;
  } else if (operator == "-") {
    simplify = num1 - num2;
  }
  return simplify;
}

var number1 = prompt("Enter your first number");
var number2 = prompt("Enter your second number");
var operator = prompt("Enter operator");
var evaluation = calculator(number1, number2, operator);
document.write(evaluation);

/*-------------------------Question No 5-------------------------*/
function squareIt(toBeSquared) {
  var squared = toBeSquared ** 2;
  document.write(squared);
}

squareIt(6);

/*-------------------------Question No 6-------------------------*/
function factorial(number) {
  if (number < 0) {
    document.write("Error! Factorial for negative number does not exist");
  } else if (number == 0) {
    document.write("The factorial of 0 is 1");
  } else {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
      fact *= i;
    }
    document.write("The factorial of " + number + " is " + fact);
  }
}

factorial(6);

/*-------------------------Question No 7-------------------------*/
function counting(startFrom, endTo) {
    if(startFrom < endTo){
        for(let i = startFrom; i<= endTo; i++){
            document.write("<br>"+ i);
        }
    }
    else if(startFrom > endTo){
        for(let i = startFrom; i >= endTo; i--){
            document.write("<br>"+ i);
        }
    }
}

counting(1,10);
counting(20, 1)

/*-------------------------Question No 8-------------------------*/

function calculateHypotenuse(base, perpendicular) {
  var hypotenuse = Math.sqrt(calculateSquare(base, perpendicular));
  document.write("<br> Hypotenuse is: " + hypotenuse);

  function calculateSquare(base, perpendicular) {
    var baseSqr = base ** 2;
    var perpendSqr = perpendicular ** 2;
    hypotSqr = baseSqr + perpendSqr;
    return hypotSqr;
  }
}
calculateHypotenuse(6, 8);

/*-------------------------Question No 9-------------------------*/

function calculateArea(width, height){
    var area = width * height;
    document.write("Area of the rectangle is: " + area);
}
var height = 42;
calculateArea(20, height);




/*-------------------------Question No 10-------------------------*/

function palindromCheck() {
    var wordPalin = prompt("Enter a Word"); //prompt("Enter a string to Palindrome checking");
    wordPalin = wordPalin.toLowerCase();
    var wordArr = wordPalin.split("");      //to convert string into an array
    var reverseArr = [];
    for (let i = wordArr.length; i > 0; i--) {
        reverseArr.push(wordArr[i - 1]);      //reversing the array
    }
    var reverseWord = reverseArr.join("");                    //convert the (reversed) array to string

    if (wordPalin == reverseWord) {
        alert("Yep! " + wordPalin + " is a Palindrome word");
    } else {
        alert("Nope! Its not a Palinedrome word.");
    }
}



/*-------------------------Question No 11-------------------------*/
function capFirstLetEachWord() {
    var stringToCap = prompt("enter any sentence to capitalize initial letter of each word");
    var strArr = stringToCap.split(" ");
    var firstEachLetterCap = [];
    for (let i = 0; i < strArr.length; i++) {
        firstEachLetterCap.push(strArr[i][0].toUpperCase() + strArr[i].slice(1));

    }
    var cappedString = firstEachLetterCap.join(" ");
    console.log(cappedString);
}

capFirstLetEachWord()



/*-------------------------Question No 12-------------------------*/
function largestWordString(string) {
    var stringAsArr = string.split(" ");
    var largestWord = "";
    for (let i = 0; i < stringAsArr.length; i++) {
        if (stringAsArr[i].length > largestWord.length) {
            largestWord = stringAsArr[i];
        }
    }
    console.log(largestWord);
}

largestWordString("Web Development Tutorial")



/*-------------------------Question No 13-------------------------*/
function occurrencesFind(string, letter){
    var count = 0;
    for (let i = 0; i<string.length; i++){
        if(string[i].toLowerCase() === letter.toLowerCase()){
            count++;
        }
    }
    document.write("<br>" + count + "times the letter "+ letter + " occurs in the string.");

}
var string = "JSResourceS.com" ;
var letter = "o" ;

occurrencesFind(string, letter)



/*-------------------------Question No 14-------------------------*/

function calcCircumference(radius){
    var circumference = (2* Math.PI *radius).toFixed(3);
    document.write("<br> The circumference of a circle of radius " + radius +" is " + circumference);
}

function calcArea(radius){
    var circleArea = (Math.PI * radius**2).toFixed(3);
    document.write("<br> The area of circle of radius " +radius + " is " + circleArea);
}

calcArea(5);
calcCircumference(5);
