// var, let and const

// var name; // Declaring a variable
// name = "Obi"; // Assigning a value

// var name = "Obi";
// var name = "Johnny";
// console.log(name);

// let variable
// CANNOT be re-declared
// It CAN be re-assigned
// let name;
// name = "Obi"
// name = "Johnny"
// console.log(name);

// const variable
// CANNOT be re-declared
// CANNOT be re-assigned
// const name = "Obi";
// name = "Johnny";
// console.log(name);

// Rules for naming variable
// Letters, number, _, $

// const firstName = "obi"; // Camel case

// const FirstName = "obi"; // Pascal case
// const First_Name = "obi"; // Pascal case
// console.log(user);


// DATA TYPES
// PRIMITIVE AND NON-PRIMITIVE/REFERENCE

// Primitive
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol() ES6

// String
// const user = "john's book"
// // Number
// const age = 30;
// // Boolean
// const isAdult = true;
// // Null
// const newUser = null;
// // Undefined
// let user1;
// // Symbol
// let sym = Symbol()
// // console.log(typeof sym);

// // Non-primitive/Reference (Object)
// // Arrays
// // Objects

// const users = ["obi", "john", "bill"];

// const Person = {
//     name: "obi",
//     age: 30
// }
// console.log(typeof Person);

 // DATA TYPE CONVERSIONS

 // let x = String(5);
 // let x = Number("5");
 // let x = Number(false);

 // let x = "5" + 5;
 // let x = 5 * "5";

// console.log(x);
// console.log(typeof x);

// STRING METHODS

// const str = "obi is a developer"
// const val = str.toUpperCase();
// const val = str.toLowerCase();
// const val = str.trim();

// const val = str.indexOf("Obi", "0");

// const val = str.lastIndexOf("obi");

// const val = str.substring("9", "19");

// const val = str.substr("9", "9");

// const val = str.replace("developer", "athlete");

// console.log(str.length);
// console.log(val);


// CONCATENATION

// const name = "obi";
// const age = 23;
// const firstName = "Obi";
// const lastName = "Obialo"

// const val = firstName.concat(" " + lastName);
// const result = "my nam;e is " + name;

// const result = `My name is ${name}`;

// console.log(val);


// MATH AND ARITHMETIC OPERATORS
// const num = 2.7673;
// const val = num.toFixed(2);

// const divide = 20 / "apple";

// Arithmetic operators
// const x = 11;
// const y = 5;

// let val;

// val = x + y;
// val = x - y;
// val = x / y;
// val = x * y;
// val = x % y;

// Math Object
// val = Math.round(5.4);
// val = Math.ceil(5.4);
// val = Math.floor(5.4);
// val = Math.pow(5, 2);
// val = Math.min(5, 2, 34, 5, 78, 43);
// val = Math.max(5, 2, 34, 5, 78, 43);

// val = Math.floor(Math.random() * 10 + 1);

// console.log(val);


//ARRAYS
// const num = new Array(2, 4, 6, 8, 10);

// const num = [2, 4, 6, 8, 10];
// const num2 = [22, 44, 66, 88, 100];
// const users = ["obi", "john", "bill"];
// const mixed = [23, "obi", {x:1, y:2}, null, undefined];

// console.log(num.length);
// let val;

// num[4] = 20
// console.log(num);
// console.log(val);

// Mutating Arrays
// num.push(40); // add a value to end of array
// num.unshift(50); // adds a value to beginning of array
// num.pop(); // deletes value at end of array
// num.shift(); // deletes value at beginning of array
// num.splice(1, 2) // removes value in array
// num.reverse(); // reverses array

// val = num.concat(num2);

// val = users.sort();
// val = num2.sort(function(a, b) {
//     return a - b;
// });

// console.log(val)


// CONDITIONALS
// IF ELSE STATEMENT

// const age = 18;

// if (age > 17) {
//     alert("You're an Adult!")
// }
// else {
//     alert("You are not an Adult");
// }

// Ternary Operator
// condition ? alert("Do something") : alert("Do something else")

// age > 17 ? alert("You are an Adult") : alert("You are NOT an Adult");

// const time = "evening";

// if (time === "morning") {
//     console.log("Good Morning!")
// }
// else if (time === "afternoon") {
//     console.log("Good Afternoon");
// }
// else {
//     console.log("Good Evening");
// }


// SWITCH STATEMENT

// switch(time) {
//     case "morning":
//         console.log("Good morning");
//         break;
//     case "afternoon":
//             console.log("Good afternoon");
//             break;
//     case "evening":
//                 console.log("Good evening");
//                 break;
//     default:
//         console.log("Good day");
//         break;
// }


// COMPARISON OPERATOR

// != : not equal toString

// == : equal by value
// === : equal by value and type

// !== : not equal by value and type

// const age = 18;

// if (age === 18) {
//     console.log("You're an Adult");
// } else {
//     console.log("The value and type does not match");
// }


// LOGICAL OPERATOR

// || = OR Operator
// && = AND Operator
// ! = NOT operator

// const name = "obi";
// const age = 18;

// if (name === "john" && age > 17) {
//     console.log("Access Granted");
// } else {
//     console.log("Access Denied");
// }

// console.log(!(age > 17));



// DATE & TIME

// let birthday = new Date("July 31 1998");
// birthday = new Date("7 31 1998");
// birthday = new Date("7-31-1998");
// birthday = new Date("7/31/1998");

// birthday.setFullYear(2021);
// birthday.setMonth(4);
// birthday.setDate(15);

// console.log(birthday);

// Date Methods
// const today = new Date();
// let val;

//val = today.getFullYear();
//val = today.getMonth(); // Months in JS run from 0-11
// val = today.getDate();
// val = today.getDay();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();


// FUNCTIONS

// function sayHello(name = "John") {
//     return `hello ${name}`;
//     // return "hello " + name;
// }

// console.log(sayHello("obi"));

// Function Expression
// const sayHello = function(name = "john") {
//     return `hello ${name}`;
// }

// console.log(sayHello());

//IFFE = Immediately Invoked Function Expression
// (function(name = "John") {
//     console.log(`hello ${name}`); 
// })("Obi")



// TEMPERATURE CONVERTER

//  Celsius to Fahrenheit Formula (0°C × 9/5) + 32 = 32°F
// function convertTemp(cel) {
//     return (cel * 1.8) + 32
// }

// const x = convertTemp(5);

// console.log(x);


// LOOPS

// console.log(users[0]);

// For, While, Do While

// For Loop
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log("This is Number 5");
//         continue;
//     }

//     if (i === 8) {
//         console.log("This is Number 8");
//         break;
//     }
//     console.log(i);
// }

// While Loop
// let i = 0;
// while(i <= 10) {
//     console.log(i);
//     i++
// }

// Do While Loop
// let i = 0;
// do {
//     console.log(i);
//     i++
// }
// while(i <= 10)

// const users = ["user 1", "user 2", "user 3", "user 4", "user 5"];

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }


// SCOPE
//GLOBAL SCOPE & LOCAL SCOPE

// var x = 1;
// let y = 2;
// const z = 3;


//Block Scope
// if (true) {
//     var x = 4;
//     let y = 5;
//     const z = 6;
//     console.log("Block scope: " + x, y, z);
// }

// console.log("Global scope: " + x, y, z);

// function myFunc() {
//     var x = 4;
//     let y = 5;
//     const z = 6;
//     console.log("Local/Function scope: " + x, y, z);
//     console.log(x + y);
// }
// myFunc();


//DOM PROPERTIES

// let val = document;

// val = document.body;
// val = document.domain;
// val = document.URL;
// val = document.title;
// val = document.documentElement;
// val = document.lastModified;

// console.log(val);



// DOM SELECTORS - SINGLE ELEMENT

// const parentEl = document.getElementById("parent-id");

// const listEl = document.querySelector(".ul-list");
// const listEl = document.querySelector("ul");

// console.log(parentEl);
// console.log(listEl);



//DOM SELECTORS - MULTIPLE ELEMENTS

// getElementsByClassName
// const parentEl = document.querySelector(".parent");
// const listItems = parentEl.getElementsByClassName("child");

// console.log(listItems);

// listItems[0].style.color = "red";


// getElementsByTagName
// const listItems = parentEl.getElementsByTagName("div");

// console.log(listItems);

// listItems[0].style.color = "red";
// listItems[1].style.color = "blue";



// querySelectorAll
// const liItems = document.querySelectorAll(".li-item");

// console.log(liItems);

// liItems[0].style.color = "red";

// for (let i = 0; i < liItems.length; i++) {
//     liItems[i].style.backgroundColor = "#eee";   
// }



// TRAVERSING THE DOM

// const parentEl = document.querySelector(".parent")
// const childTwo = document.querySelector(".child-2")

// let val = parentEl.childNodes;
// val = parentEl.children;
// val = parentEl.children[1];
// val = parentEl.firstElementChild;
// val = parentEl.lastElementChild;

// val = childTwo.parentElement;
// val = childTwo.parentElement.parentElement;

// val = childTwo.nextElementSibling;
// val = childTwo.previousElementSibling;

// console.log(val);



//MANIPULATING ELEMENTS
// const text = document.querySelector(".child-2");

// text.innerHTML = "<h3>Modify Child Two</h3>";
// text.textContent = "Modified Child Two Again";
// text.innerText = "Modified Child Two yet Again";

// text.style.color = "red";
// text.style.fontSize = "40px";


//CREATING ELEMENTS

// const parentEl = document.querySelector(".parent");
// const text = document.querySelector(".child-2");

// const newEl = document.createElement("div")
// newEl.classList.add("child");
// newEl.classList.remove("child"); // To remove class
// const newText = document.createTextNode("This is some NEW text");

// newEl.appendChild(newText);

// parentEl.appendChild(newEl);

// parentEl.insertBefore(newEl, text);


// REMOVING ELEMENTS

// const parentEl = document.querySelector(".parent");
// const text = document.querySelector(".child-2");

// text.remove()



// EVENT LISTENERS & HOISTING

// const h2 = document.querySelector("h2");
// const btn = document.querySelector(".btn");

//Function Expression // YOU MUST CREATE FUNCTION BEFORE YOU CALL THEM (FUNCTION EXPRESSION)
// const myFunc = function() {
//     h2.textContent = "Text Changed";
//     h2.style.background = "#eee";
// }


// btn.addEventListener("click", myFunc);


//Function Declaration
// function myFunc() {
//     h2.textContent = "Text Changed";
//     h2.style.background = "#eee";
// }



// FORM EVENTS

// const form = document.querySelector("form");
// const username = document.querySelector(".username");
// const password = document.querySelector(".password");

// form.addEventListener("submit", submitForm)

// function submitForm(event) {
//     event.preventDefault();
//     const usernameVal = username.value;
//     const passwordVal = password.value;
//     console.log(usernameVal);
//     console.log(passwordVal);
// }

// event.target;
    // console.log(event.target.className);
    // console.log(event.target.classList);




    // EVENT BUBBLING
// document.querySelector(".btn").addEventListener("click", function() {
//     console.log("Button Clicked");
// })

// document.querySelector(".content").addEventListener("click", function() {
//     console.log("Content Clicked");
// })

// document.querySelector(".container").addEventListener("click", function() {
//     console.log("Container Clicked");
// })


//EVENT DELEGATION // (IF CLASSES ARE SIMILAR USE THIS)
// const text = document.querySelector(".text");
// const content = document.querySelector(".content");

// content.addEventListener("click", function(e) {
//     if (e.target.classList.contains("btn")) {
//         text.textContent = "Button 1 was clicked";
//     }
//     if (e.target.classList.contains("btn-1")) {
//         text.textContent = "Button 2 was clicked";
//     }
//     if (e.target.classList.contains("btn-2")) {
//         text.textContent = "Button 3 was clicked";
//     }
// })



// const btn = document.querySelector(".btn");
// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");

// btn.addEventListener("click", function() {
//     text.textContent = "Button 1 was clicked";
// })
// btn1.addEventListener("click", function() {
//     text.textContent = "Button 2 was clicked";
// })
// btn2.addEventListener("click", function() {
//     text.textContent = "Button 3 was clicked";
// })





