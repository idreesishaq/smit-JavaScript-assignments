/*Q1: Declare and initialize an empty multidimensional array (Array of arrays)
-------------------------------------------------------------------------------*/
var mdArray = [
    [],
    [],
    []
];


/*Q2 Declare and initialize a multidimensioal array representing the following matrix
-------------------------------------------------*/
var mdArray = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
    
];




/*Q3: Write a program to print numeric counting from 1 to 10.
----------------------------------------------------------*/

for (i=1; i<=10; i++){
    document.write(i + "<br>");
}






/*Q4
-----------------------------*/

var tableOf = +prompt("Enter a table number",);
var tableLenght = +prompt("Enter the length of table you want",);


document.write("Multiplication table of " + tableOf + " Length "+ tableLenght + "<br>");
for(i=1; i<=tableLenght; i++){
    document.write(tableOf + " x "+ i +" = "+ tableOf*i + "<br>");
}




/*------------Question 5-------------*/
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

for (let i = 0; i < fruits.length; i++) {
    document.write("<br>Element at index " + i + " is " + fruits[i]);
}



/*--------------Question 6 -------------*/

document.write("<b>Counting:</b><br>");
for(let i=1; i<=15; i++){
    document.write(i+", ");
}

document.write("<br><b>Reverse counting:</b><br>");
for(let i=10; i>=1; i--){
    document.write(i+", ");
}

document.write("<br><b>Even:</b><br>");
for(let i=0; i<=20; i=i+2){
    document.write(i+", ");
}

document.write("<br><b>Odd:</b><br>");
for(let i=1; i<=19; i=i+2){
    document.write(i+", ");
}

document.write("<br><b>Series</b><br>");
for(let i=2; i<=20; i=i+2){
    document.write(i+"k, ");
}


/*--------------------- Question 7-------------------*/


var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var sweets = prompt("Enter any sweets item");
for (let i = 0; i < a.length; i++) {
    if (sweets == a[i]) {
        alert(sweets + " is availabe at index " + i + " in our bakery");
    }
    else {
        alert("We are sorry. pastry is not availabe in our bakery");
    }
}

/*
with the above code if the input sweets match with any of array element
it will give the true alert.
if condition is not met, it will give false alert number of times equals to array length.
So, so solve this problem we use "flag"
*/

var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var availability = false;
var sweets = prompt("Enter any sweets item");
for (let i = 0; i < a.length; i++) {
    if (sweets == a[i]) {
        availability = true;
        alert(sweets + " is availabe at index " + i + " in our bakery");
    }
}
if (availability == false) {
    alert("We are sorry! " + sweets + " is not availabe in our bakery");
}



/*-----------Question No 8 ------------*/
var numArr = [24,53,78,91,12];
document.write("Array Items: "+ numArr);
document.write("<br>");
var newNumArr = numArr.sort();
var largNum = newNumArr[newNumArr.length-1];
document.write("The largest number is "+ largNum);


/*---------Question No 9---------*/
var numArr = [24,53,78,91,12];
document.write("Array Items: "+ numArr);
document.write("<br>");
var newNumArr = numArr.sort();
var smallestNum = newNumArr[1];
document.write("The smallest number is "+ smallestNum);


/*-------------Question No 10---------------*/
for(let i=5; i<=100; i=i+5){
    document.write(i+", ")
}


