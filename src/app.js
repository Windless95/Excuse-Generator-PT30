/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let who1 = who[Math.floor(Math.random() * 4)];
  let action1 = action[Math.floor(Math.random() * 4)];
  let what1 = what[Math.floor(Math.random() * 4)];
  let when1 = when[Math.floor(Math.random() * 4)];

  document.querySelector("#excuse").innerHTML =
    who1 + " " + action1 + " " + what1 + " " + when1;

  function addingWho() {
    boxvalue = document.getElementById("box").value;
    who.push(boxvalue);
    console.log(who);
    return false;
  }
};
