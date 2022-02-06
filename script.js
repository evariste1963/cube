"use strict";

const cube = document.querySelector(".cube");

const contactBtn = document.querySelector(".contact-btn");
const signupBtn1 = document.querySelector(".signup-btn1");
const contactBtn1 = document.querySelector(".contact-btn1");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cube.style.transform = "rotateY(90deg)";
  console.log("clicked");
});

// contactBtn1.addEventListener("click", (e) => {
//   e.preventDefault();
//   cube.style.transform = "rotateY(0deg)";
// });

signupBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  cube.style.transform = "rotateY(-90deg)";
});
