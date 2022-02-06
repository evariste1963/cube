"use strict";

const cube = document.querySelector("#cube");

const menuBtnR = document.querySelector(".menu-btnR");
const menuBtnL = document.querySelector(".menu-btnL");
const contactBtnR = document.querySelector(".contact-btnR");
const contactBtnL = document.querySelector(".contact-btnL");
const signinBtnR = document.querySelector(".signin-btnR");
const signinBtnL = document.querySelector(".signin-btnL");
const signupBtnR = document.querySelector(".signup-btnR");
const signupBtnL = document.querySelector(".signup-btnL");

contactBtnL.addEventListener("click", (e) => {
  e.preventDefault();

  cube.style.transform = "rotateY(90deg)";
});
contactBtnR.addEventListener("click", (e) => {
  e.preventDefault();
  cube.style.transform = "rotateY(-270deg)";
});

signinBtnL.addEventListener("click", (e) => {
  e.preventDefault();
  cube.style.transform = "rotateY(180deg)";
  console.log("clicked");
});
signinBtnR.addEventListener("click", (e) => {
  e.preventDefault();
  cube.style.transform = "rotateY(-180deg)";
  
  console.log("clicked");
});

signupBtnL.addEventListener("click", (e) => {
  e.preventDefault();
  cube.style.transform = "rotateY(270deg)";
  console.log("clicked");
});
signupBtnR.addEventListener("click", (e) => {
  e.preventDefault();
  cube.style.transform = "rotateY(-90deg)";
  console.log("clicked");
});

menuBtnL.addEventListener("click", (e) => {
  e.preventDefault();
  cube.style.transform = "rotateY(0deg)";
  console.log("clicked");
});
menuBtnR.addEventListener("click", (e) => {
  e.preventDefault();
  cube.style.transform = "rotateY(0deg)";
  console.log("clicked");
});

var el = document.getElementById("cube");

var st = window.getComputedStyle(el, null);

var tr =
  st.getPropertyValue("-webkit-transform") ||
  st.getPropertyValue("-moz-transform") ||
  st.getPropertyValue("-ms-transform") ||
  st.getPropertyValue("-o-transform") ||
  st.getPropertyValue("transform") ||
  "Either no transform set, or browser doesn't do getComputedStyle";
  console.log(tr);
var values = tr.split("(")[1],
  values = values.split(")")[0],
  values = values.split(",");

var a = values[0]; // 0.866025
var b = values[1]; // 0.5
var c = values[2]; // -0.5
var d = values[3]; // 0.866025

var angle = Math.round(Math.asin(b) * (180 / Math.PI));
console.log(angle);
