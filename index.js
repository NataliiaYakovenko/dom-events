"use strict";

const btn = document.querySelector("#btn");

btn.addEventListener("click", greetingUser);
function greetingUser(event) {
  alert("Hello, clicker!");
};

const link = document.querySelector("#link");
const hiddenBtn = document.querySelector("#hiddenBtn");
hiddenBtn.style.display = "none";

link.addEventListener("click", newButtonAppears);
function newButtonAppears(event) {
  event.preventDefault();
  hiddenBtn.style.display = "inline-block";
};

const lamp = document.querySelector("#lamp");
const lampBtn = document.querySelector("#lampBtn");

lampBtn.addEventListener("click", lampOn);
function lampOn(event) {
  event.preventDefault();
  lamp.classList.toggle("lamp-on");
};
