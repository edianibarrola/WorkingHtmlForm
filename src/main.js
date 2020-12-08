/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
var addError = string => {
  let alertBox = document.querySelector(".alert");
  alertBox.classList.contains("d-none") && alertBox.classList.toggle("d-none");
  alertBox.innerHTML += `<li> ${string}  </li>`;
};

window.validateForm = function validateForm(e) {
  let resetInputs = document.querySelectorAll("input");
  resetInputs.forEach(element => element.classList.remove("is-invalid"));

  //input vars
  let inputCc = document.querySelector("#inputCc");
  let inputCvc = document.querySelector("#inputCvc");
  let inputAmount = document.querySelector("#inputAmount");
  let inputFirstName = document.querySelector("#inputFirstName");
  let inputLastName = document.querySelector("#inputLastName");
  let inputCity = document.querySelector("#inputCity");
  let inputState = document.querySelector("#inputState");
  let alertBox = document.querySelector(".alert");
  let inputZip = document.querySelector("#inputZip");
  // testing vars
  !alertBox.classList.contains("d-none") && alertBox.classList.toggle("d-none");

  if (inputCc.value < 1000000000000000) {
    addError("CC number invalid. Must be 16 digits.");
    inputCc.classList.add("is-invalid");
  } else inputCc.classList.remove("is-invalid");

  if (inputCvc.value < 100) {
    addError("CVC number is invalid. Must be 3-4 digits.");
    inputCvc.classList.add("is-invalid");
  }
  if (inputAmount.value == 0) {
    addError("Please enter the amount");
    inputAmount.classList.add("is-invalid");
  }
  if (inputFirstName.value.length < 2) {
    addError("Please enter your full first name.");
    inputFirstName.classList.add("is-invalid");
  }
  if (inputLastName.value.length < 2) {
    addError("Please enter your full last name.");
    inputLastName.classList.add("is-invalid");
  }
  if (inputCity.value.length < 2) {
    addError("Please enter your city.");
    inputCity.classList.add("is-invalid");
  }
  if (inputState.value.length != 2) {
    addError("Please select a state.");
    inputState.classList.add("is-invalid");
  }
  if (inputZip.value < 10000) {
    addError("Please enter your zip code.");
    inputZip.classList.add("is-invalid");
  }
};

//document.getElementById("myForm").addEventListener("submit", validateForm);
