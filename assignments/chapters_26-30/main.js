/*------------------------------CHAPTERS 26-30------------------------------*/


/*------------------------------Question No. 1------------------------------*/
var pInt;
function getPositiveInt() {
    pInt = +(prompt("Enter a positive number"));
    if (pInt < 0) {
        alert("Given integer is not a POSITIVE");
        getPositiveInt()
    } else {
        document.write("number:" + pInt);
    }
}
getPositiveInt()

document.write("<br>round off:" + Math.round(pInt));
document.write("<br> floor value: " + Math.floor(pInt));
document.write("<br> ceil value: " + Math.ceil(pInt));



/*------------------------------Question No. 2------------------------------*/
var nInt;
function getNegativeInt() {
    nInt = +(prompt("Enter a Negative floating point number"));
    if (nInt > 0) {
        alert("Given integer is not a negative Integer");
        getNegativeInt()
    } else {
        document.write("number:" + nInt);
    }
}
getNegativeInt()

document.write("<br>round off:" + Math.round(nInt));
document.write("<br> floor value: " + Math.floor(nInt));
document.write("<br> ceil value: " + Math.ceil(nInt));



/*------------------------------Question No. 3------------------------------*/
var toAbsoluteNum = +prompt("Enter any number to get its abosulte");
document.write("The absolute value of "+toAbsoluteNum + " is "+ Math.abs(toAbsoluteNum));



/*------------------------------Question No. 4------------------------------*/
var x = Math.random();
var dice = Math.round(x*5)+1;
document.write("random dice value: " + dice);



/*------------------------------Question No. 5------------------------------*/
var coinToss = Math.ceil(Math.random()*2);
var coinValue;
if(coinToss ==1){
    coinValue = "Head";
} else {
    coinValue = "Tail";
}
document.write("radom coin Toass: " + coinToss);
document.write("<br> random coin value: " + coinValue);



/*------------------------------Question No. 6------------------------------*/
var rand100 = Math.ceil(Math.random()*100);
document.write("random number between 1 and 100: " + rand100);



/*------------------------------Question No. 7------------------------------*/
/*
function justNumbers(string)
{
   var numsStr = string.replace(/[^0-9]/g, '');
   return parseInt(numsStr);
}
document.write(justNumbers('abcdefg12hi2.5jklmnop'));
*/

let weight = prompt("Enter your weight in Kgs");
let weightNum = weight.replace(/\D/g, "");
document.write("The weight of user is "+ weightNum + " kilograms");


/*------------------------------Question No. 8------------------------------*/
var rand10 = Math.ceil(Math.random()*10);
var userGuess = +prompt("Guess a number between 1 to 10");
if(userGuess == rand10){
    alert("Congratulation");
} else {
    alert("Try again!");
}



/*------------------------------ The End ------------------------------*/