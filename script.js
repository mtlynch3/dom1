// 1 - Select the section with an id of container without using querySelector.
console.log(document.getElementById("container"));

//2
console.log(document.querySelector("#container")); 

//3
console.log(document.querySelectorAll(".second"));

//4 double check
console.log(document.querySelector("ol .third"));

//5 
// document.getElementById("container").innerHTML = "Hello!";

//6
document.querySelector('.footer').classList.add('main');

//7
document.querySelector(".footer").classList.remove('main');

//8
var x = document.createElement("LI");

//9
var t = document.createTextNode("four");
x.appendChild(t);

//10
document.querySelector("ul").appendChild(x);

//11
for( let i = 0; i < 3; i++){
    document.querySelectorAll("ol li")[i].style.backgroundColor = "green";
}
//12
document.querySelector(".footer").remove();

