// /* Q1: Write a program that take two numbers and add them in a new variable. Show the result in your browser.
// -----------------------------------------------------*/

// var num1 = +prompt("Enter first number",);
// var num2 = +prompt("Enter second number",);
// var sum = num1 + num2;
// document.write("Sum of "+num1 +" and " +num2 +" is "+sum);


// /* Q2: Repeat task 1 for subtraction, multiplication, division & modulus.
// Subtraction
// -----------------------------------------------*/
// var numSub1 = +prompt("Enter first number for subtraction");
// var numSub2 = +prompt("Enter the number which will be subtracted");
// var sumSub = numSub1-numSub2;
// document.write("The sum of subtraction from "+numSub1+" by "+numSub2+" is " +sumSub);

// /*Multiplication
// -----------------*/
// var numMuliple1 = +prompt("Enter first number for multiplication");
// var numMuliple2 = +prompt("Enter second number for multiplication");
// var resultMuliple = numMuliple1 * numMuliple2;
// document.write("The mulipication of " +numMuliple1+ " & "+ numMuliple2+ " is "+ resultMuliple);


// /* Division
// ------------
// */
// var numDiv1 = +prompt("Enter a Dividend number");
// var numDiv2 = +prompt("Enter a Divisor number");
// var resultDiv = numDiv1 / numDiv2;
// document.write("The result of the Division of "+ numDiv1 + " by " +numDiv2+ " is "+resultDiv);


// /* Modulus
// -------------a Divided number*/
// var numMod1 = +prompt("Enter a Divided number");
// var numMod2 = +prompt("Enter a Divisor number");
// var resultMod = numMod1 % numMod2;
// document.write("The Modulus of the division of "+numMod1+" by "+ numMod2+ " is "+ resultMod);


// /* Q3 
// ----------*/
// /* a. Declare a variable */

// var val ;

// /* b. Show the value of variable in your browser */

// document.write("Value after variable declaration is: ??");

// /* c. Initialize the variable with some number. */

// val = 5;

// /* d. Show the value of variable in your browser */
// document.write("<br> Initial value: "+ val);

// /* e. Increment the value of variable */
// val += 1;

// /* f. Show the value of variable in your browser */
// document.write("<br> Value after increment is: "+ val);

// /* g. Add 7 to the variable.*/
// val += 7;

// /* h. Show the value of variable in your browser */
// document.write("<br> Value after addition is " + val);

// /* i. Decrement the variable */
// val -= 1;

// /* j. Show the value of variable in your browser */
// document.write("<br> Value after decrement is: "+ val);

// /* k. show the remainder after dividing the variable's value by 3 */
// document.write("<br> The remainder is :" + val%3);


// /* Q4
// ------------------------*/
// var ticketPrice = 600;
// var ticketQty = +prompt("How many tickets you wanna buy");
// var totalCost = ticketPrice*ticketQty;
// document.write("Total cost to by " + ticketQty + "tickets to a movie is " + totalCost+"PKR");


/* Q5. 
-------------------------------*/
/* By for loop */
// var tableNum = +prompt("Which table you want, Enter a number");
// document.write("Table of "+tableNum + "<br>");
// for (i=1; i<=10; i++){
//     document.write(tableNum+" x "+i+" = "+ tableNum*i +"<br>");
// }

// /* By Manual */
// var tableOf = +prompt("Enter a number which table you want");
// document.write("Table of "+tableOf +"<br>");
// document.write(tableOf +" x "+ 1 +" = " +tableOf*1 +"<br>");
// document.write(tableOf +" x "+ 2 +" = " +tableOf*2 +"<br>");
// document.write(tableOf +" x "+ 3 +" = " +tableOf*3 +"<br>");
// document.write(tableOf +" x "+ 4 +" = " +tableOf*4 +"<br>");
// document.write(tableOf +" x "+ 5 +" = " +tableOf*5 +"<br>");
// document.write(tableOf +" x "+ 6 +" = " +tableOf*6 +"<br>");
// document.write(tableOf +" x "+ 7 +" = " +tableOf*7 +"<br>");
// document.write(tableOf +" x "+ 8 +" = " +tableOf*8 +"<br>");
// document.write(tableOf +" x "+ 9 +" = " +tableOf*9 +"<br>");
// document.write(tableOf +" x "+ 10 +" = " +tableOf*10 +"<br>");

// /* Q6 The Temperature Converter:
// ----------------------------------*/
// var degC = +prompt("Enter temperature in Degree Celcius");
// var ConFahrenheit = (degC*1.8)+32;
// document.write(degC+"<sup>o</sup>C is "+ ConFahrenheit +"<sup>o</sup>F <br>");
// var degF = +prompt("Enter temperature into Fahrenheit");
// var ConCelcius = (degF-32)/1.8;
// document.write(degF +"<sup>o</sup>F is "+ ConCelcius.toFixed(2) +"<sup>o</sup>C");

// /* Q7 
// -----------------*/

// var item1Price = +prompt("Price of item1"); 
// var item2Price = +prompt("Price of item2");
// var qtyItem1 = +prompt("Ordered Quantity of item1");
// var qtyItem2 = +prompt("Ordered Quantity of item2");
// var shippingCharges = +prompt("Shipping Charges");
// var totalCost= (item1Price*qtyItem1) + (item2Price*qtyItem2);
// document.write("<h1>Shopping Cart</h1> <br> Price of item 1 is "+item1Price + 
// "<br> Quantity of item 1 is " +qtyItem1 + 
// "<br> Price of item 2 is " + item2Price +
// "<br> Quantity of item 2 is " + qtyItem2 +
// "<br> Shipping Charges "+ shippingCharges +
// "<br><br> Total cost of your order is " + totalCost );


// /* Q8: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// ----------------------------------------------------------
// */
// var totalMarks = +prompt("Enter Total Marks");
// var marksObtained = +prompt("Enter marks obtained");
// var percentage = marksObtained*100/totalMarks;
// document.write("<h1>Marks Sheet</h1> <br> Total marks: "+ totalMarks+
// "<br> Marks Obtained: " + marksObtained +
// "Percentage: "+ percentage);

// /* Q9: 
// ------------*/

// var totalPKR = (10*286.68)+(25*76.43);
// document.write("<h1>Currency in PKR</h1><br>Total Currency in PKR "+ totalPKR);


// /* Q10:
// ------------*/
// var anyNum = +prompt("Enter any number for arithmatic operations");
// var calc = ((anyNum+5)*10)/2;
// document.write(calc);


// /* Q11: The Age Calculator
// -----------------------------*/
// var currentYear = 2023;
// var birthYear = 1974;
// document.write("<h1>Age Calculator</h1><br> Current Year: "+currentYear+ "<br> Birth Year: "+ birthYear+ "<br> Your Age is: " + (currentYear-birthYear));


// /* Q12: The Geometrizer:
// ------------------------*/
// var r = +prompt("Enter the radius of the circle");
// var circumference = 2*3.142*r;
// var area = 3.142*r**2;
// document.write("<h1>The Geometrizer</h1><br>");
// document.write("Radius of the Circle: " + r+ "<br>");
// document.write("The circumference is: "+circumference+ "<br>");
// document.write("The area is: "+ area+"<br>");


// /*Q13: The Lifetime Supply Calculator:
// -----------------------------------------*/
// var favSnack = "ChocoLava";
// var myCurrAge = 18;
// var maxAge = 63;
// var sPD = 3;
// var youCanEat = (maxAge-myCurrAge)*365*sPD;
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("<br> Favourite Snack: "+favSnack);
// document.write("<br> Current age: "+myCurrAge);
// document.write("<br> Estimated Maximum Age: "+maxAge);
// document.write("<br> Amount of snacks per day: "+ sPD);
// document.write("<br> You will need "+youCanEat + favSnack + " to last you until the ripe old age of "+maxAge);

