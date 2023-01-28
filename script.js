"use strict";

const outerCube = document.querySelector("#outer-cube");
const innerCube = document.getElementById("inner-cube");
const centerCube = document.querySelector("#center-cube");
const root = document.querySelector(":root");
const ball = document.querySelector(".ball");
const slow = 10000;
const medium = slow * 0.5;
const fast = medium * 0.6;
let durationTime = 5000;

//3 ways to crack the same egg
//JS version of keyframes with added onload function call
window.onload = function () {
  outerCube.animate(
    [{ transform: "rotateY(0)" }, { transform: "rotateY(-360deg)" }],
    { duration: slow, iterations: Infinity }
  );
  changeCol()
  setInterval(changeCol, durationTime);
};

let ballColour;
//random number generator
const randomNoGenerator = () =>
  Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, 0);

// set and render random color of ball
const setColor = () => {
  let ballColour = `#${randomNoGenerator()}${randomNoGenerator()}${randomNoGenerator()}`;
  root.style.setProperty("--ballTopColor", ballColour);
};

function changeCol() {
  {
    setColor();
    ball.classList.toggle("green-ball");
  }
}

root.style.setProperty("--ballTopColor", ballColour);

ball.animate(
  [
    { transform: "scale(1, 1)" },
    { transform: "scale(65, 65)" },
    { transform: "scale(1, 1)" },
  ],
  {
    duration: durationTime,
    iterations: Infinity,
  }
);

//same as above but using requestAnimationFrame as a 1 shot infinite call, which is a bit meaningless apparantly
const center = function () {
  centerCube.animate(
    [{ transform: "rotateY(0)" }, { transform: "rotateY(360deg)" }],
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
    : (innerCube.style.transform = `rotatex(${angle}deg)`);
  angle++;
}
setInterval(innerSpin, 14);
