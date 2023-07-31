var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var number = document.getElementById("number").value;
var password = document.getElementById("password").value;

function handleSubmit(){
    displayData()
    // document.getElementById("signupForm").reset();

}

function displayData(){
   var formData = document.getElementById("formDataContainer");
   formData.innerHTML = `
   <h1>Name: ${name}</h1>
   <h1>email: ${email}</h1>
   <h1>number: ${number}</h1>
   `;

}

