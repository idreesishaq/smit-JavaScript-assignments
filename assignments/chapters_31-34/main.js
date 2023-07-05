/*------------------------------ CHAPTERS 31-34 ------------------------------*/


/*------------------------------ QUESTION NO. 1 ------------------------------*/
var today = new Date();
document.write(today);
document.write("<br>");



/*------------------------------ QUESTION NO. 2 ------------------------------*/
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var theMonth = today.getMonth();
document.write("<br> Current month: " + monthNames[theMonth]);



/*------------------------------ QUESTION NO. 3 ------------------------------*/
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var theDay = today.getDay();
var todayName = dayNames[theDay];
document.write("<br> Today is : " + todayName);



/*------------------------------ QUESTION NO. 4 ------------------------------*/
if (todayName === "Sat" || todayName === "Sun") {
    document.write("<br> It's Fun day");
} else {
    document.write("<br> Enjoy workday");
}



/*------------------------------ QUESTION NO. 5 ------------------------------*/
var theDate = today.getDate();
document.write("<br> The Date: " + theDate);

var halfMonthMsg = "First fifteen days of the month";
var halfMonthMsg2 = "Last days of the month";

if (theDate < 16) {
    document.write("<br>" + halfMonthMsg);
} else {
    document.write("<br>" + halfMonthMsg2);
}



/*------------------------------ QUESTION NO. 6 ------------------------------*/
document.write("<br> Current Date: " + today);

var theTime = today.getTime();
document.write("<br> The Time: " + theTime);
document.write("<br> Elapsed milliseconds since January 1, 1970: " + theTime);
document.write("<br> Elapsed minutes since January 1, 1970: " + theTime / 1000 / 60);



/*------------------------------ QUESTION NO. 7 ------------------------------*/
var currHour = today.getHours();
document.write("<br>" + currHour)
if (currHour < 12) {
    document.write("<br> It's AM");
} else {
    document.write("<br> It's PM");
}



/*------------------------------ QUESTION NO. 8 ------------------------------*/
var lastDayOf2020 = new Date("Dec 31, 2020");
document.write("<br> lastDay of 2020: " + lastDayOf2020);



/*------------------------------ QUESTION NO. 9 ------------------------------*/
var firstDayRamadan = new Date("Mar 23, 2023");
var dayDiff = today - firstDayRamadan;
var dayPast = Math.floor(dayDiff / 1000 / 60 / 60 / 24);
document.write("<br>" + dayPast + " days have passed since 1st Ramadan, 2023");



/*------------------------------ QUESTION NO. 10 ------------------------------*/
var timePassReference = new Date("Dec 05, 2015 22:50:16 GMT+0500 (PKT)").getTime() - new Date("Jan 1, 2015").getTime();
var secPass = timePassReference / 1000;
var daysPass = Math.floor(timePassReference / 1000 / 60 / 60 / 24);
document.write("<br> On reference date Sat Dec 05 2015 22:50:16 GMT+0500 (PKT), <br> "
    + secPass + " Seconds and " + daysPass + " Days had been passed since the beginning of 2015");



/*------------------------------ QUESTION NO. 11 ------------------------------*/
var currTime = new Date();
document.write("<br> current date: " + currTime);
var anHourAhead = new Date(new Date().setHours(currTime.getHours()-1));
document.write("<br> 1 hour ago"+ anHourAhead);



/*------------------------------ QUESTION NO. 12 ------------------------------*/
var timeNow = new Date();
document.write("<br> current date: " + timeNow);
var hundredYearsBack = new Date(new Date().setFullYear(timeNow.getFullYear()-100));
document.write("<br> 100 Years back: "+ hundredYearsBack);



/*------------------------------ QUESTION NO. 13 ------------------------------*/
var yourAge = +prompt("Please enter your age");
document.write("<br> Your age is: " + yourAge);
document.write("<br> Your birth year is: " + (new Date().getFullYear()-yourAge));



/*------------------------------ QUESTION NO. 14 ------------------------------*/
document.write("<br><h1>K-Electric Bill</h1>");
var customername = "Muhammad Idrees";
var newMonthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
var month = newMonthArr[new Date().getMonth()];
var noOfUnits = 410;
var chargesPerUnit = 16;
var netAmount = noOfUnits * chargesPerUnit;
var lateCharge = 350;
var amountPayable = netAmount + lateCharge;
document.write("<br> Customer Name: " + "<strong>" + customername + "</strong>");
document.write("<br> Month: " + "<strong>" + month + "</strong>");
document.write("<br> Number of units: " + "<strong>" + noOfUnits + "</strong>");
document.write("<br> Charges per unit: " + "<strong>" + chargesPerUnit + "</strong>");
document.write("<br> Net Amount Payable (within Due Date): " + "<strong>" + netAmount + "</strong>");
document.write("<br> Late payment surcharge: " + "<strong>" + lateCharge + "</strong>");
document.write("<br> Gross Amount Payable (after Due Date): " + "<strong>" + amountPayable + "</strong>");

