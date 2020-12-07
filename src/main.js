/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const validate = e => {
  e.preventDefault();

  let inputCc = document.querySelector("#inputCc");
  let inputCvc = document.querySelector("#inputCvc");
  let inputAmount = document.querySelector("#inputAmount");
  let inputFirstName = document.querySelector("#inputFirstName");
  let inputLastName = document.querySelector("#inputLastName");
  let inputCity = document.querySelector("#inputCity");
  let inputState = document.querySelector("#inputState");

  if (inputCc.value < 1000000000000000) {
    addError("CC number invalid. Must be 16 digits");
    inputCc.classList.add("is-invalid");
  }
};

let addError = msg => {
  var errorMsg = document.querySelector(".alert");
};
document.getElementById("myForm").addEventListener("submit", validate);
