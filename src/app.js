/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let a = ["the", "our", "random"];
  let b = ["pretty", "amazing", "sweet"];
  let c = ["racoon", "trashpanda", "redpanda"];
  let d = [".com", ".net", ".org"];

  for (let z of a) {
    for (let y of b) {
      for (let x of c) {
        for (let w of d) {
          document.querySelector("#Wizardbirb").innerHTML +=
            "<li>" + z + y + x + w + "<li>";
        }
      }
    }
  }
};
