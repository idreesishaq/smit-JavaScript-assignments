var students =[
    {index: 0, name: "Umar", class: 10},
    {index: 1, name: "Ahsan", class: 9},
    {index: 2, name: "Mohsin", class: 8},
    {index: 3, name: "Hasan", class: 8},
    {index: 4, name: "Noman", class: 9},
    {index: 5, name: "Ali Raza", class: 10},
    {index: 6, name: "Qadir", class: 8},
    {index: 7, name: "Rashid", class: 10},
    {index: 8, name: "Usman", class: 10},
    {index: 9, name: "Nasir", class: 7},
];


  
  document.addEventListener("DOMContentLoaded", function() {
    var tableBody = document.querySelector("#student-table tbody");
  
    // Function to create a row for each student record
    function createRow(student, index) {
      var row = document.createElement("tr");
  
      // Create cells for each student property
      var indexCell = document.createElement("td");
      indexCell.textContent = student.index;
      row.appendChild(indexCell);
  
      var nameCell = document.createElement("td");
      nameCell.textContent = student.name;
      row.appendChild(nameCell);
  
      var classCell = document.createElement("td");
      classCell.textContent = student.class;
      row.appendChild(classCell);
  
      // Create delete button for each row
      var actionCell = document.createElement("td");
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        deleteRow(index);
      });
      actionCell.appendChild(deleteButton);
      row.appendChild(actionCell);
  
      return row;
    }
  
    // Function to display all student records in the table
    function displayStudents() {
      tableBody.innerHTML = ""; // Clear existing rows
  
      students.forEach(function(student, index) {
        var row = createRow(student, index);
        tableBody.appendChild(row);
      });
    }
  
    // Function to delete a row by its index
    function deleteRow(index) {
      students.splice(index, 1);
      displayStudents();
    }
  
    // Initial display of students' records
    displayStudents();
  });

