/*
----------------QUESTION NO 1--------------------------
i. Get element of id “main-content” and assign them in a variable.
ii. Display all child elements of “main-content” element.
iii. Get all elements of class “render” and show their innerHTML
in browser.
iv. Fill input value whose element id first-name using javascript.
v. Repeat part iv for id ”last-name” and “email”.
*/

var mainContent = document.getElementById("main-content");
for(let i=0; i<mainContent.childElementCount; i++){
    console.log(mainContent.children[i]);
}


/*
var FormContent = document.getElementById("form-content");
for(let i=0; i<FormContent.childElementCount; i++){
    console.log(FormContent.children[i]);
}
*/


var render = document.getElementsByClassName("render");
for( let i=0; i<render.length; i++){
    console.log(render[i].innerHTML);
}


var firstName = document.getElementById("first-name");
firstName.value = "Muhammad";
var lastName = document.getElementById("last-name");
lastName.value = "Idrees";
var email = document.getElementById("email");
email.value = "muhammadidrees@gmail.com";


/*
-------------------------QUESTION NO 2-------------------------
i. What is node type of element having id “form-content”.
ii. Show node type of element having id “lastName” and its child node.
iii. Update child node of element having id “lastName”.
iv. Get First and last child of id “main-content”.
v. Get next and previous siblings of id “lastName”.
vi. Get parent node and node type of element having id “email”
*/

var nodeTypeArr = ["Element", "Attribute", "Text", "CDATASection", "EntityReference", "Entity", "ProcessingInstruction", "Comment", "Document", "DocumentType", "DocumentFragment", "Notation"];
var formContent = document.getElementById("form-content");
console.log("The node typ of element having id form-content is: " + nodeTypeArr[formContent.nodeType-1]);
console.log("The node typ of element having id last-name is: " + nodeTypeArr[lastName.nodeType-1]);
var newTextNode = document.createTextNode("This text is created by JavaScript");
var para = document.createElement("p");
para.appendChild(newTextNode);
lastName.appendChild(para);
console.log(lastName);
console.log("The first element of the element having id main-content is: " , mainContent.firstElementChild);
console.log("The last element of the element having id main-content is: " , mainContent.lastElementChild);
console.log("The parent node of the element having id 'email' is: ", email.parentNode);
console.log("The node type of the parent node of the element having id 'email' is: \n" , nodeTypeArr[email.parentNode.nodeType-1]);
