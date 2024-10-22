let ViewSkills = document.getElementById("toggle-btn") as HTMLElement;

let condition = false;

ViewSkills.addEventListener("click", () => {
  let visibility = document.querySelector(".main-section") as HTMLElement;
  if (condition) {
    visibility.style.display = "grid";
    ViewSkills.innerText = "Hide Details";
    condition = false;
    ViewSkills.style.marginTop = "0";
  } else {
    visibility.style.display = "none";
    condition = true;
    ViewSkills.innerText = "View Details";
    ViewSkills.style.marginTop = "20px";
  }
});
