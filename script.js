"use strict";

const outerCube = document.querySelector("#outer-cube");
const innerCube = document.querySelector("#inner-cube");
const centerCube = document.querySelector("#center-cube");


  //IIFE -- replaces keyframes in CSS
  (function () {
    outerCube.animate(
      [{ transform: "rotateY(0)" }, { transform: "rotateY(-360deg)" }],
      { duration: 10000, iterations: Infinity }
    );
    innerCube.animate(
      [{ transform: "rotateY(0)" }, { transform: "rotateY(360deg)" }],
      { duration: 5000, iterations: Infinity }
    );

    centerCube.animate(
      [{ transform: "rotateY(0)" }, { transform: "rotateY(-360deg)" }],
      { duration: 3000, iterations: Infinity }
    );
  }
)();
