"use strict";

const outerCube = document.querySelector("#outer-cube");
const innerCube = document.getElementById("inner-cube");
const centerCube = document.querySelector("#center-cube");

const slow = 10000;
const medium = slow * 0.5;
const fast = medium * 0.6;

//3 ways to crack the same egg
//JS version of keyframes with added onload function call
window.onload = function () {
  outerCube.animate(
    [{ transform: "rotateY(0)" }, { transform: "rotateY(-360deg)" }],
    { duration: slow, iterations: Infinity }
  );
};

//same as above but using requestAnimationFrame as a 1 shot infinite call, which is a bit meaningless apparantly
const center = function () {
  centerCube.animate(
    [{ transform: "rotateY(0)" }, { transform: "rotateY(-360deg)" }],
    { duration: fast, iterations: Infinity }
  );
};
window.requestAnimationFrame(center);

//using setInterval -- doesn't require calling
/*let angle = 0;
setInterval(function () {
  angle >= 360 ? (angle = 0) : innerSpin(angle);
  angle++;
}, 14);

const innerSpin = function (angle) {
  innerCube.style.transform = `rotateY(${angle}deg)`;
};*/

//same as above but different
let angle = 0;
function innerSpin() {
  angle >= 360
    ? (angle = 0)
    : (innerCube.style.transform = `rotateY(${angle}deg)`);
  angle++;
}
setInterval(innerSpin, 14);
