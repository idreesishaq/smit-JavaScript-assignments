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

if(theDate < 16){
    document.write("<br>"+ halfMonthMsg);
} else {
    document.write("<br>" + halfMonthMsg2);
}



/*------------------------------ QUESTION NO. 6 ------------------------------*/
document.write("<br> Current Date: " + today);

var theTime = today.getTime();
document.write("<br> The Time: " + theTime );
document.write("<br> Elapsed milliseconds since January 1, 1970: " + theTime);
document.write("<br> Elapsed minutes since January 1, 1970: " + theTime/1000/60);



/*------------------------------ QUESTION NO. 7 ------------------------------*/
var currHour = today.getHours();
document.write("<br>" + currHour)
if(currHour < 12){
    document.write("<br> It's AM");
} else {
    document.write("<br> It's PM");
}



/*------------------------------ QUESTION NO. 8 ------------------------------*/
var lastDayOf2020 = new Date("Dec 31, 2020");
document.write("<br> lastDay of 2020: "+ lastDayOf2020);



/*------------------------------ QUESTION NO. 9 ------------------------------*/


/*------------------------------ QUESTION NO. 10 ------------------------------*/


/*------------------------------ QUESTION NO. 11 ------------------------------*/


/*------------------------------ QUESTION NO. 12 ------------------------------*/


/*------------------------------ QUESTION NO. 13 ------------------------------*/


/*------------------------------ QUESTION NO. 14 ------------------------------*/

