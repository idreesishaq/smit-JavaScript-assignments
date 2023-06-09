/* Chapter6-9 */

/* Q1  
-----------------------*/


// document.write("Result");
// var a = 10;
// document.write("<br> The value of a is: " + a );
// document.write("<br>..........................");
// document.write("<br>");

// document.write("<br> The value of ++a is: " + ++a);
// document.write("<br> Now the value of a is : " + a);
// document.write("<br>");

// document.write("<br> The value of a++ is: "+ a++);
// document.write("<br> Now the value of a is: "+ a);
// document.write("<br>");

// document.write("<br> The value of --a is: "+ --a);
// document.write("<br> Now the value of a is: "+ a);
// document.write("<br>");

// document.write("<br> The value of a-- is: "+ a--);
// document.write("<br> Now the value of a is: "+ a);


/* Question: 2
----------------------------*/
// var a =2, b=1;
// var result = --a - --b + ++b + b--;
// document.write("<br> a is ?? " + a);
// document.write("<br> b is ?? " + b);
// document.write("<br> result is ?? " + result);

/* // Explain the output at each stage
var expression1 = --a;
var expression2 = --a - --b;
var expression3 = --a - --b + ++b;
var expression4 =  --a - --b + ++b + b--;
document.write("<br> --a = " + expression1);
document.write("<br> --a - --b = " + expression2);
document.write("<br> --a - --b + ++b = " + expression3);
document.write("<br> --a - --b + ++b + b-- = " + expression4);
*/


/* Question No. 3
--------------------------*/
// var name = prompt("Please provide you Name ");
// var greeting = "Thanks You " + name + " to visit us";
// document.write(greeting);


/* Question No. 5 
----------------------------*/

// var anyNum = +prompt("Enter any number", 5);
// for(var i=1; i<=10; i++){
// document.write("<br>" + i + " x " + anyNum + " = " + i*anyNum);
// }

/* Question No. 6
---------------------------*/
/*step (a)*/
var sub1 = prompt("Enter your first subject");
var sub2 = prompt("Enter your second subject");
var sub3 = prompt("Enter your third subject");

/*step (b)*/
var totalMarks = 100;

/*step (c)*/
var sub1Marks = +prompt("Enter your obtained marks in " + sub1);

/*step (d)*/
var sub2Marks = +prompt("Enter your obtained marks in " + sub2);
var sub3Marks = +prompt("Enter your obtained marks in " + sub3);

/*step (e)*/
var sub1Pc = sub1Marks*100/totalMarks + " %";
var sub2Pc = sub2Marks*100/totalMarks + " %";
var sub3Pc = sub3Marks*100/totalMarks + " %";
var totalObtainedMarks = sub1Marks+sub2Marks+sub3Marks;
var pcnt = totalObtainedMarks*100/300 ;
var totalPcnt = pcnt.toFixed(2) + " %";

document.getElementById("sub1").innerHTML = sub1;
document.getElementById("sub2").innerHTML = sub2;
document.getElementById("sub3").innerHTML = sub3;

document.getElementById("sub1Marks").innerHTML = sub1Marks;
document.getElementById("sub2Marks").innerHTML = sub2Marks;
document.getElementById("sub3Marks").innerHTML = sub3Marks;
document.getElementById("sub1pc").innerHTML = sub1Pc;
document.getElementById("sub2pc").innerHTML = sub2Pc;
document.getElementById("sub3pc").innerHTML = sub3Pc;
document.getElementById("grandTotalMarks").innerHTML = "<strong>" + totalMarks*3 + "</strong>";
document.getElementById("totalObtainedMarks").innerHTML = "<strong>" + totalObtainedMarks + "</strong>";
document.getElementById("overall-percentage").innerHTML = "<strong>" + totalPcnt + "</strong>";

