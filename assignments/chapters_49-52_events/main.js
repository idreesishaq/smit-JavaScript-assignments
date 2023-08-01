/*--------------- QUESTION NO 1 ---------------*/
function handleSubmit(event) {

    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;



    document.getElementById("signupForm").reset();


    var formData = document.getElementById("formDataContainer");
    formData.innerHTML = `
   <p><strong>Name: </strong> ${name}</p>
   <p><strong>email: </strong> ${email}</p>
   <p><strong>number: </strong> ${number}</p>
   <p><strong>number: </strong> ${password}</p>
   `;

}

/*--------------- QUESTION NO 2 ---------------*/

var shortText = "Lorem ipsum dolor sit amet consectetur adipisicing elit"
var fullText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quaerat, reiciendis delectus exercitationem autem soluta explicabo similique iusto ab repellendus amet debitis, voluptatibus minima earum rerum mollitia magni iure suscipit."

document.getElementById("shortContent").innerText = shortText;

