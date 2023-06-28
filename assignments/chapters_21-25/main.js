/*--------------------CHAPTER 21-25--------------------*/



/*-------------------- Question No 1 --------------------*/
var firstName = prompt("Enter first name","ali");
var lastName = prompt("Enter last name","faraz");
var fullName = firstName +" " +lastName;
alert("Assalam-o-Alaikum! Mr. " + fullName);



/*-------------------- Question No 2 --------------------*/
var fvtMobile = prompt("Please enter your favorite Mobile Model");
var charLen = fvtMobile.length;
document.write("<br>My favorite phone is: "+ fvtMobile);
document.write("<br>Length of string: "+ charLen);

/*-------------------- Question No 3 --------------------*/
var nationality = "Pakistani";
var index = nationality.indexOf("n");
document.write("<br>String: "+ nationality);
document.write("<br>Index of 'n': " + index);

/*-------------------- Question No 4 --------------------*/
var string2 = "Hello World";
var lastIndex = string2.lastIndexOf("l");
document.write("String: "+ string2);
document.write("<br>Last index of 'l': "+ lastIndex);


/*-------------------- Question No 5 --------------------*/
var string3 = "Pakistani";
var character = string3.charAt(3);
document.write("String: " + string3);
document.write("<br>Character at index 3: " + character);


/*-------------------- Question No 6 --------------------*/
var firstName2 = prompt("Enter Your First Name");
var lastName2 = prompt("Enter Your Last Name");
var fullName2 = firstName2.concat(" "+lastName2);
alert("Wellcome Mr. "+fullName2);


/*-------------------- Question No 7 --------------------*/
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: " + city);
document.write("<br>After replacement: " + newCity);

/*Alternative Method*/
var city2 = "Faisalabad";
for(let i=0; i < city2.length; i++){
    if(city2.slice(i,i+6)==="Faisal"){
        var newCity2 = city2.slice(0,i) + "Abbot" + city2.slice(i+6);
    }
}
alert(newCity2);


/*-------------------- Question No 8 --------------------*/
var message = "Ali and Sami are best friends. They play cricket and football together. Their ages are 14 and 15 respectively.";
document.write(message);

var newMessage = message.replace("and", "&");
document.write("<br><br>"+ newMessage);

/*-------------------- Question No 9 --------------------*/
var numAsString = "472";
var numAsNum;
numAsNum = Number(numAsString);
document.write("Value: "+numAsString);
document.write("<br>Type: "+typeof(numAsString));
document.write("<br>Value: "+ numAsNum);
document.write("<br>Type: "+typeof(numAsNum));

/*-------------------- Question No 10 --------------------*/
var userInput = prompt("Enter your favorite nuts");
var toCap = userInput.toUpperCase();
console.log("User Input: "+ userInput);
console.log("<br> Upper case: "+ toCap);



/*-------------------- Question No 11 --------------------*/
var userInput2 = prompt("Enter any string value e.g. javascript");
console.log("User Input: " + userInput2);
userInput2 = userInput2.toLowerCase();
console.log("Lower Case: " + userInput2);
var titleCase = userInput2.slice(0,1).toUpperCase() + userInput2.slice(1);
console.log("Title: " + titleCase);





/*-------------------- Question No 12 --------------------*/

var num = +prompt("Enter any number");
// var num = 35.36;
var numDotFree = Number(num.toString().replace(".",""))
console.log("num " + num );
console.log("numDotFree "+ numDotFree);
/* This code returns the decimal free num like 35.36 to 3536. But returns 111.000 number to 111. We can fix that by taking input as String instead to number */



/*-------------------- Question No 13 --------------------*/
var username = prompt("Enter your username:");
console.log(username);
for(let i=0; i<username.length; i++){
    condition = username[i]==="!" || username[i]==="." || username[i]==="," || username[i]==="@";
    if(condition){
        console.log("Your username "+ username + " is invalid");
        console.log("Plese enter a valid username");
    }
}




/*-------------------- Question No 14 --------------------*/
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
console.log(A);

var itemSeeking = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
item = itemSeeking.toLowerCase();
var availability = false;
for(let i = 0; i < A.length ; i++){
    if(A[i]===item){
        availability = true;
        alert(itemSeeking+ " is <b>availabe at index </b>" + i + " in our bakery");
    } 
}
if(availability === false){
    alert("We are sorry. "+ item + " is <b>not available</b> in our bakery");
    
}




/*-------------------- Question No 15 --------------------*/
/*complete this question*/



/*-------------------- Question No 16 --------------------*/
var university = "University of Karachi";
var stringToArray = university.split("");
for(let i = 0; i<stringToArray.length; i++){
    document.write(stringToArray[i]+ "<br>");
}


/*-------------------- Question No 17 --------------------*/
var nationality = prompt("What is your nationality");
let lastChar = nationality[nationality.length-1];
document.write("user input: "+ nationality);
document.write("<br> Last character of "+nationality +": "+ lastChar);


/*-------------------- Question No 18 --------------------*/
var stringWord = "The quick brown fox jumps over the lazy dog.";
var findWordOccurences = prompt("Enter a word");
let j = 0;
for(let i = 0; i < stringWord.length; i++){
    if (stringWord.slice(i,i+findWordOccurences.length) === findWordOccurences);
    j++;

}
console.log(j);

/*need to review*/
