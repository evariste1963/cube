"use strict";

const outerCube = document.querySelector("#outer-cube");
const innerCube = document.getElementById("inner-cube");
const centerCube = document.querySelector("#center-cube");

window.onload = function () {
  outerCube.animate(
    [{ transform: "rotateY(0)" }, { transform: "rotateY(-360deg)" }],
    { duration: 10000, iterations: Infinity }
  );
  // innerCube.animate(
  //   [{ transform: "rotateY(0)" }, { transform: "rotateY(360deg)" }],
  //   { duration: 5000, iterations: Infinity }
  // );
};
const center = function () {
  centerCube.animate(
    [{ transform: "rotateY(0)" }, { transform: "rotateY(-360deg)" }],
    { duration: 3000, iterations: Infinity }
  );
};
window.requestAnimationFrame(center);

//using setInterval instead of above
let angle = 0;
setInterval(function () {
  angle >= 360 ? (angle = 0) : innerSpin(angle);
  angle++;
}, 14);

const innerSpin = function (angle) {
  innerCube.style.transform = `rotateY(${angle}deg)`;
};
