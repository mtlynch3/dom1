
// let h1 = document.querySelector('h1'); //first h1 tag in html file
// console.log(h1); //<h1>Hello</h1>
// console.log(h1.parentElement); // body tag
// console.log(h1.children); //children: only returns element nodes
//         // emptyList
// console.log(h1.childNodes); //text node "Hello"

// let ul = document.querySelector('ul');
// console.log(ul.children); //list items one, two , three
// console.log(ul.lastElementChild.nodeType); //1-element
// //chilren and childNodes returns a NodeList
// //this is an array-like object
// console.log(ul.lastElementChild.childNodes[0].nodeType); //3- text node

// // // Select the section with an id of container without using querySelector.
// console.log(document.getElementById("container"));

// // // Select the section with an id of container using querySelector.
// console.log(document.querySelector("#container")); 

// document.querySelector('#bye'); //<h1>Goodbye</h1>

// // // Select all of the nodes in document with a class of "second".
// //returns a NodeList
// //<li class="second"> from ul, <li...> from ol]
// console.log(document.querySelectorAll(".second"));

// // // Select a list item with a class of third, but only the list item inside of the ol tag.
// console.log(document.querySelector("ol .third"));

// // // Give the section with an id of container the text "Hello!".
// document.getElementById("container").innerHTML = "<h3>hello</h3>";

// // Add the class main to the div with a class of footer.
// document.querySelector('.footer').classList.add('main');

// // Remove the class main on the div with a class of footer.
// document.querySelector(".footer").classList.remove('main');

// Create a new li element.
let li = document.createElement("li");
//<li></li>
// Give the li the text "four".
let txt = document.createTextNode("four");
//four
li.appendChild(txt);
//li = <li>four</li>

//Append the li to the ol element.
//document.querySelector("ol").appendChild(li);

// Loop over all of the li's inside the ol tag and give them a background color of "pink".
for(let i = 0; i < 3; i++) {
  document.querySelectorAll("ol li")[i].style.backgroundColor = "pink";
}
let ol = document.querySelector("ol");
ol.style.backgroundColor = "magenta";


// Remove the first item in the ol
let olLastItem = ol.lastElementChild;
ol.removeChild(olLastItem);

// onlick functionality
ol.onclick = function (){
  this.style.backgroundColor = "red";
};

