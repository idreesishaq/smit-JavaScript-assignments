/* ------------------ QUESTION NO 1 ------------------*/

var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
]

var totalPrice = 0;
function itemsPrice(object) {
    console.log(object);
    price = object.price * object.quantity;
    console.log(price);
    totalPrice += price;
}

itemsArray.forEach(itemsPrice);
console.log("Total Price ", totalPrice);

/* ------------------ QUESTION NO 2 ------------------
Create an object with properties name, email, password, age, gender, city, country.
Check if age and country properties exist in object or not.
Also check firstName and lastName properties in object.
*/
var candidate = {
    name: "Ali",
    email: "ali@gmail.com",
    password: 123456,
    age: 21,
    gender: "male",
    city: "karachi",
    country: "Pakistan"
}

var age, country, firstName, lastName;
age = "age";
country = "country";
firstName = "firstName";
lastName = "lastName";

var exit;

if (age in candidate) {
    exit = "is exit"
} else {
    exit = "is not exit";
}
console.log(age + exit + " in the object candidate");

if (country in candidate) {
    exit = " is exit"
} else {
    exit = " is not exit";
}
console.log(country + exit + " in the object candidate");

if (firstName in candidate) {
    exit = " is exit"
} else {
    exit = " is not exit";
}
console.log(firstName + exit + " in the object candidate");

if (lastName in candidate) {
    exit = " is exit"
} else {
    exit = " is not exit";
}
console.log(lastName + exit + " in the object candidate");


/* ------------------ QUESTION NO 3 ------------------
Create a constructor function with some properties. Now create multiple records using the constructor.
*/

function Candidate(firstName, lastName, age, country) {
    this.firstNameame = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country
}



var candidate1 = new Candidate("idrees", "ishaq", 21, "Pakistan");
var candidate2 = new Candidate("noman", "raza", 27, "Pakistan");
var candidate3 = new Candidate("usman", "muneer", 27, "Saudi Arabia");
var candidate4 = new Candidate("wahaj", "khan", 26, "Pakistan");
var candidate5 = new Candidate("muneeb", "tahir", 26, "Pakistan");
var candidate6 = new Candidate("umair", "rao", 27, "Pakistan");
var candidates = [candidate1, candidate2, candidate3, candidate4, candidate5, candidate6];
console.log(candidates);


/* ------------------ QUESTION NO 4 ------------------
Suppose you want to check population of your area, their educations and professions.
Create a constructor function which holds following properties:
Name, gender, address, education, profession,
Enter all records one by one.
*/

function Census(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

var fullName = document.getElementById("full-name");
var gender = document.getElementsByName("gender");
var address = document.getElementById("address");
var education = document.getElementById("education");
var profession = document.getElementById("profession");
var form = document.getElementById("form");

var submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    event.preventDefault();
    let genderValue;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderValue = gender[i].value
        }
    }

    var key = "census" + (localStorage.length + 1);
    var census = new Census(fullName.value, genderValue, address.value, education.value, profession.value);
    localStorage.setItem(key, JSON.stringify(census));

    form.reset();
})
