"use strict";
//const
const btn = document.querySelector(".js-play-button");
const singers = document.querySelector(".js-select");
const message = document.querySelector(".js-message");

function MessageFuntionhandler() {
  message.classList.remove("red");
  if (singers.value === "berry") {
    message.innerHTML = "No tiene pinta de estar entre las carreras de letras.";
  }
  if (singers.value === "bowie") {
    message.innerHTML = "No tiene pinta de estar entre las carreras de letras.";
  }
  if (singers.value === "mercury") {
    message.innerHTML = "Vas por buen camino.";
  }
  if (singers.value === "hendrix") {
    message.innerHTML = "";
    functionIsTrue();
  }
  if (singers.value === "cohen") {
    message.innerHTML = "No creo que tenga que ver con lo visual";
  }
}
btn.addEventListener("click, MessageFunctionHandler");
