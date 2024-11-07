"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ViewSkills = document.getElementById("toggle-btn");
let condition = false;
ViewSkills.addEventListener("click", () => {
    let visibility = document.querySelector(".main-section");
    if (condition) {
        visibility.style.display = "grid";
        ViewSkills.innerText = "Hide Details";
        condition = false;
        ViewSkills.style.marginTop = "0";
    }
    else {
        visibility.style.display = "none";
        condition = true;
        ViewSkills.innerText = "View Details";
        ViewSkills.style.marginTop = "20px";
    }
});
