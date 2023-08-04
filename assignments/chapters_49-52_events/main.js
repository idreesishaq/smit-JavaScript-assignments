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

var students = [];

function addStudent(event) {
  event.preventDefault();

  var name = document.getElementById("naam").value;
  var standard = document.getElementById("standard").value;
  var grade = document.getElementById("grade").value;

  var student = { name: name, standard: standard, grade: grade };
  students.push(student);

  displayStudentTable();
  document.getElementById("student-form").reset();
}

function displayStudentTable() {
  var tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  students.forEach(function(student, index) {
    var row = createTableRow(student, index);
    tableBody.appendChild(row);
  });
}

function createTableRow(student, index) {
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

  var actionsCell = document.createElement("td");
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    deleteStudent(index);
  });
  actionsCell.appendChild(deleteButton);

  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function() {
    editStudent(index);
  });
  actionsCell.appendChild(editButton);

  row.appendChild(actionsCell);

  return row;
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudentTable();
}
function editStudent(index) {
  var row = document.getElementById("tableBody").children[index];
  var nameCell = row.children[0];
  var standardCell = row.children[1];
  var gradeCell = row.children[2];

  var nameValue = nameCell.textContent;
  var standardValue = standardCell.textContent;
  var gradeValue = gradeCell.textContent;

  nameCell.innerHTML = `<input type="text" value="${nameValue}">`;
  standardCell.innerHTML = `<input type="number" value="${standardValue}">`;
  gradeCell.innerHTML = `<input type="text" value="${gradeValue}">`;

  var actionsCell = row.children[3];
  var saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", function() {
    saveStudent(index);
  });
  actionsCell.innerHTML = "";
  actionsCell.appendChild(saveButton);
}

function saveStudent(index) {
  var row = document.getElementById("tableBody").children[index];
  var nameValue = row.children[0].querySelector("input").value;
  var standardValue = row.children[1].querySelector("input").value;
  var gradeValue = row.children[2].querySelector("input").value;

  students[index].name = nameValue;
  students[index].standard = standardValue;
  students[index].grade = gradeValue;

  displayStudentTable();
}
