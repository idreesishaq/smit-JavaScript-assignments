/*------------------------- CHAPTER 38-48 -------------------------*/

/* ------------------------- QUESTION NO 1 -------------------------*/
function power(a, b) {
    document.write(a + "<sup>" + b + "</sup> = " + a ** b);
}

power(5,3)

/* ------------------------- QUESTION NO 2 -------------------------*/
function leapYearCheck(year){
    if(year%4 == 0){
        document.write(year + " is leap year")
    } else {
        document.write(year + " is not leap year");
    }
}


leapYearCheck(2100)



/* ------------------------- QUESTION NO 3 -------------------------*/
function triangleArea(a,b,c){
    var s = (a+b+c)/2;
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2);
    document.write("Area of Triagile is :" + area);
}

triangleArea(10,13,20);




/* ------------------------- QUESTION NO 4 -------------------------*/

/* Wrong Wrong Wrong
function result(sub1, sub2, sub3) {
    function average(sub1, sub2, sub3) {
        avg = Math.avg(sub1 + sub2 + sub3);
        document.write("Average :" + avg);
    }

    function percentage(sub1, sub2, sub3) {
        var totalMarks = 100;
        pct = (sub1 + sub2 + sub3) * 100 / (3 * totalMarks);
        document.write("<br> Percentage : " + pct);

        average(sub1, sub2, sub3)
        percentage(sub1, sub2, sub3)
    }
}
result(85, 95, 70)
*/


function calculateAverage(sub1, sub2, sub3){
    return (sub1+ sub2+ sub3)/3;
}

function calculatePercentage(totalMarks, maxMarks){
    return (totalMarks/maxMarks)*100;
}
function mainFunction(sub1, sub2, sub3){
    const average = calculateAverage(sub1, sub2, sub3);
    const percentage = calculatePercentage(average, 100);

    document.write("Average: "+ average.toFixed(2));
    document.write("<br>Percentage"+ percentage.toFixed(2));

}

mainFunction(85, 65, 70)


/* ------------------------- QUESTION NO 5 -------------------------*/
function findIndex(string, letter){
    for(let i=0; i<string.length; i++){
        if(string[i] === letter){
            console.log("The first index of "+ letter + " is: "+ i);
            break;
        }
    }
}

const nameString = "my name is hamza";
findIndex(nameString, "z")



/* ------------------------- QUESTION NO 6 -------------------------*/
function deleteVowel(string) {
    var vowelFreeString = string;
    vowelArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for (let i = 0; i < vowelArr.length; i++) {
        vowelFreeString = vowelFreeString.replaceAll(vowelArr[i], "");
    }
    document.write(vowelFreeString);
}
var greeting = "Assalamo Alaikum Dosto, mera naam Idrees he. aur me karachi me rehta hon. Ap log kaha se hain, aur ap log karte kaya hain";
deleteVowel(greeting);



/* ------------------------- QUESTION NO 7 -------------------------*/

/*--------------On Way----------------*/
/*function countSuccessiveVowels(text) {
    var count = 0;
    var lowercaseText = text.toLowerCase();

    for (var i = 0; i < lowercaseText.length - 1; i++) {
      var currentChar = lowercaseText[i];
      var nextChar = lowercaseText[i + 1];

      switch (currentChar) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          if (isVowel(nextChar)) {
            count++;
          }
          break;
      }
    }

    return count;
  }

  function isVowel(char) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);
  }

  // Example usage:
  var sentence = "Please read this application and give me gratuity";
  var occurrences = countSuccessiveVowels(sentence);

  console.log("Occurrences of successive vowels:", occurrences);
  */

  /*-------------The other Way---------------*/
function vowelOccurrences(sentence){
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  var lowerCaseSentence = sentence.toLowerCase();
  for(let i=0; i<lowerCaseSentence.length-1; i++){
    var currenLetter = i;
    var nextLetter = i+1;
    switch (lowerCaseSentence[i]){
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        if(vowel.includes(lowerCaseSentence[nextLetter])){
          count++;
        }
    }
  }
  console.log(count);
}
var myPhrase = "The book you read is one of the top financial book";
vowelOccurrences(myPhrase);


/* ------------------------- QUESTION NO 8 -------------------------*/
function kmToMeter(distance) {
  console.log(distance * 1000 + " meters");
}
function kmToFeet(distance) {
  var intoFeet = (distance * 3280.84).toFixed(2);
  console.log(intoFeet + " Feet");
}
function kmToInches(distance) {
  var intoInches = (distance * 1000 * 100 / 2.54).toFixed(2);
  console.log(intoInches + " inches");

}
function kmToCentimeter(distance) {
  var intoCm = (distance * 1_000_00).toFixed(2);
  console.log(intoCm + " centimeter");
}

var distance = prompt("Enter any distance into kilometer, to convert into meter,cm, inches, and feet");
kmToMeter(distance)
kmToFeet(distance)
kmToInches(distance)
kmToCentimeter(distance)



/* ------------------------- QUESTION NO 9 -------------------------*/
function overTimePay(totalWorkHour) {
    var overtimepay = (totalWorkHour - 40) * 12
    console.log("overtime pay = " + overtimepay);
}

overTimePay(60)


/* ------------------------- QUESTION NO 10 -------------------------*/
var amount = +prompt("Enter amount you want to get");
var note100 = 0;
var note50 = 0;
var note10 = 0;
var leftAmount = amount;
function currencyNotes(leftAmount) {
    function currency100(leftAmount) {
        // let i =0;
        // while (amount >= 100){
        //     note100++;
        //     amount = amount-100;
        // }
        // console.log(note100);

        for (let i = 0; leftAmount >= 100; i++) {
            note100++;
            leftAmount = leftAmount - 100;
        }
        console.log(note100 + " Notes of 100");
        return leftAmount;
    }

    function currency50(leftAmount) {
        for (let i = 0; leftAmount >= 50; i++) {
            note50++;
            leftAmount = leftAmount - 50;
        }
        console.log(note50 + " Notes of 50");
        return leftAmount;
    }

    function currency10(amount) {
        for (let i = 0; amount >= 10; i++) {
            note10++;
            amount = amount - 10;
        }
        console.log(note10 + " Notes of 10");
        return amount;
    }
    leftAmount = currency100(leftAmount);
    leftAmount = currency50(leftAmount)
    leftAmount = currency10(leftAmount)
}

currencyNotes(leftAmount)
console.log("Your amount " + amount);

