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

var fullText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quaerat, reiciendis delectus exercitationem autem soluta explicabo similique iusto ab repellendus amet debitis, voluptatibus minima earum rerum mollitia magni iure suscipit."
var shortText;
var lessText = '';

function seeMore(){
    var seeContent = document.getElementById("shortContent");
    var seeMoreBtn = document.getElementById("see-more-btn");
    if(lessText){
        seeContent.innerText = shortText;
        seeMoreBtn.innerText = "See more";
        lessText = '';
        
    } else{
        shortText = document.getElementById("shortContent").innerText;

        seeContent.innerText = fullText;
        seeMoreBtn.innerText = "See less";
        lessText = true;
    }
}

/*--------------- QUESTION NO 3 ---------------*/

students = [];


function getTableData() {
    event.preventDefault();
var name = document.getElementById("naam").value;
var standard = document.getElementById("standard").value;
var grade = document.getElementById("grade").value;

var student = { name: name, standard: standard, grade: grade }
students.push(student);
document.getElementById("form").reset();

populateTableData()

function populateTableData () {
    
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = student.name;
    row.appendChild(nameCell);
    
    var standardCell = document.createElement("td");
    standardCell.textContent = student.standard;
    row.appendChild(standardCell);
    
    var gradeCell = document.createElement("td");
    gradeCell.textContent = student.grade;
    row.appendChild(gradeCell);

    var actionCell = document.createElement("td");
    row.appendChild(actionCell);
    
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    actionCell.appendChild(editBtn);

    var delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    actionCell.appendChild(delBtn);


    var table = document.querySelector("#table, tbody");
    table.appendChild(row);
    }
    

}
