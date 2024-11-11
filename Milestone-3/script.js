"use strict";
//Personal Info Section
let firstName = document.getElementById("first-name"), middleName = document.getElementById("middle-name"), lastName = document.getElementById("last-name"), Email = document.getElementById("email"), phoneNumber = document.getElementById("phone-number");
//Education Section
let eduDiv = document.getElementById("edu-sec"), schoolName = document.getElementsByClassName("school"), degreeName = document.getElementsByClassName("degree"), schoolLocation = document.getElementsByClassName("location-edu"), eduStarting = document.getElementsByClassName("starting-date-edu"), eduEnding = document.getElementsByClassName("ending-date-edu"), eduDescription = document.getElementsByClassName("brief-description-education"), addEdu = document.getElementById("add-education");
//Work Experience
let workDiv = document.getElementById("work-sec"), jobTitle = document.getElementsByClassName("work-title"), companyName = document.getElementsByClassName("work-organization"), workLocation = document.getElementsByClassName("location-work"), workStarting = document.getElementsByClassName("starting-date-work"), workEnding = document.getElementsByClassName("ending-date-work"), workDescription = document.getElementsByClassName("brief-description-work"), addWork = document.getElementById("add-work");
//Skills
let skillInput = document.getElementById("skills");
//Projects
let projectDiv = document.getElementById("projects-sec"), projectName = document.getElementsByClassName("project-title"), projectUrl = document.getElementsByClassName("project-url"), projectDescription = document.getElementsByClassName("brief-description-project"), addProject = document.getElementById("add-project");
//Languages
let languages = document.getElementById("languages");
//Adding Functionality
let eduCount = 0;
addEdu?.addEventListener("click", () => {
    let newEdu = `<div class="sections transition">
            <div class="input-container">
              <label for="school">School</label>
              <input
                class="input school"
                type="text"
                placeholder="School Name"
                maxlength="100"
                required
              />
            </div>
            <div class="input-container">
              <label for="degree">Degree</label>
              <input
                class="input degree"
                type="text"
                placeholder="Degree"
                maxlength="100"
                required
              />
            </div>
            <div class="input-container">
              <label for="location">Location</label>
              <input
                class="input location-edu"
                type="text"
                placeholder="Location"
                maxlength="100"
                required
              />
            </div>
            <div class="input-container">
              <label for="starting-date">Start Date</label>
              <input
                class="input starting-date-edu"
                type="date"
                placeholder="Starting-date"
                required
              />
            </div>
            <div class="input-container">
              <label for="ending-date">Ending Date</label>
              <input
                class="input ending-date-edu"
                type="date"
                placeholder="Ending Date"
                required
              />
            </div>
            <div class="input-container">
              <label for="brief-description-education">Brief Description</label>
              <input
                type="text"
                class="input brief-description-education"
                placeholder="Description"
                maxlength="100"
                required
              />
            </div>
          </div>`;
    if (eduDiv && eduCount < 2) {
        eduDiv.insertAdjacentHTML("beforeend", newEdu);
        let addedDiv = eduDiv.lastElementChild;
        setTimeout(() => {
            addedDiv?.classList.add("visible");
        }, 10);
        eduCount++;
    }
});
let workCount = 0;
addWork?.addEventListener("click", () => {
    let newWork = `<div class="sections transition">
            <div class="input-container">
              <label for="title">Job Title</label>
              <input
                class="input work-title"
                type="text"
                placeholder="Title"
                maxlength="100"
                required
              />
            </div>
            <div class="input-container">
              <label for="organization">Company / Organization</label>
              <input
                class="input work-organization"
                type="text"
                placeholder="Company Name"
                maxlength="100"
                required
              />
            </div>
            <div class="input-container">
              <label for="country">Location</label>
              <input
                class="input location-work"
                type="text"
                placeholder="Location"
                maxlength="100"
                required
              />
            </div>
            <div class="input-container">
              <label for="starting-date">Start Date</label>
              <input
                class="input starting-date-work"
                type="date"
                placeholder="Starting-date"
                required
              />
            </div>
            <div class="input-container">
              <label for="ending-date">Ending Date</label>
              <input
                class="input ending-date-work"
                type="date"
                placeholder="Ending Date"
                required
              />
            </div>
            <div class="input-container">
              <label for="brief-description-work">Brief Description</label>
              <input
                type="text"
                class="input brief-description-work"
                placeholder="Description"
                maxlength="100"
                required
              />
            </div>
          </div>`;
    if (workDiv && workCount < 2) {
        workDiv.insertAdjacentHTML("beforeend", newWork);
        let addedDiv = workDiv.lastElementChild;
        setTimeout(() => {
            addedDiv?.classList.add("visible");
        }, 10);
        workCount++;
    }
});
let projectCount = 0;
addProject?.addEventListener("click", () => {
    let newProject = `<div class="sections transition">
            <div class="input-container">
              <label for="title">Project Name</label>
              <input
                class="input project-title"
                type="text"
                placeholder="Title"
                maxlength="100"
                required
              />
            </div>
            <div class="input-container">
              <label for="organization">Project URL</label>
              <input
                class="input project-url"
                type="text"
                placeholder="Company Name"
                maxlength="100"
                required
              />
            </div>
            <div class="input-container">
              <label for="brief-description">Brief Description</label>
              <input
                class="input brief-description-project"
                type="text"
                placeholder="Description"
                maxlength="100"
                required
              />
            </div>
          </div>`;
    if (projectDiv && projectCount < 2) {
        projectDiv.insertAdjacentHTML("beforeend", newProject);
        let addedDiv = projectDiv.lastElementChild;
        setTimeout(() => {
            addedDiv?.classList.add("visible");
        }, 10);
        projectCount++;
    }
});
//Preview
let namePrev = document.getElementById("name-prev");
let emailPrev = document.getElementById("email-prev");
let phonePrev = document.getElementById("pn-prev");
let skillSet = document.getElementById("skill-list");
let langList = document.getElementById("lang-list");
let eduPrev = document.getElementById("edu-prev");
let workPrev = document.getElementById("work-prev");
let projPrev = document.getElementById("proj-prev");
//The most difficult part personally for me
const profilePic = document.getElementById("pfp"), pfpPrev = document.getElementById("pfp-prev");
function updatePfp() {
    const image = profilePic?.files?.[0];
    if (image) {
        const imageUrl = URL.createObjectURL(image);
        pfpPrev.style.backgroundImage = `url(${imageUrl})`;
    }
}
function updateResume() {
    let name = `${firstName.value} ${middleName.value} ${lastName.value}`;
    namePrev.textContent = name;
    let email = `${Email.value}`;
    emailPrev.textContent = email;
    let phone = `${phoneNumber.value}`;
    phonePrev.textContent = phone;
    //skill update
    skillSet.innerHTML = "";
    let skill = skillInput.value.trim().split(",");
    skill.forEach((skill) => {
        let addSkill = document.createElement("li");
        addSkill.textContent = skill;
        skillSet.appendChild(addSkill);
    });
    //Language update
    langList.innerHTML = "";
    let language = languages.value.trim().split(",");
    language.forEach((language) => {
        let addedLang = document.createElement("li");
        addedLang.textContent = language;
        langList.appendChild(addedLang);
    });
    //Education update
    eduPrev.innerHTML = "";
    for (let i = 0; i < degreeName.length; i++) {
        let addedDegree = document.createElement("div");
        addedDegree.innerHTML = `
    <h4>${degreeName[i].value} at ${schoolName[i].value}</h4>
    <p>${schoolLocation[i].value}</p>
    <p>${eduStarting[i].value} - ${eduEnding[i].value}</p>
    <p>${eduDescription[i].value}</p>
    `;
        eduPrev.appendChild(addedDegree);
    }
    //Work update
    workPrev.innerHTML = "";
    for (let i = 0; i < jobTitle.length; i++) {
        let addedWork = document.createElement("div");
        addedWork.innerHTML = `
    <h4>${jobTitle[i].value} at ${companyName[i].value}</h4>
    <p>${workLocation[i].value}</p>
    <p>${workStarting[i].value} - ${workEnding[i].value}</p>
    <p>${workDescription[i].value}</p>
    `;
        workPrev.appendChild(addedWork);
    }
    //Project updaye
    projPrev.innerHTML = "";
    for (let i = 0; i < projectName.length; i++) {
        let addedProject = document.createElement("div");
        addedProject.innerHTML = `
    <h4>${projectName[i].value}</h4>
    <p>${projectDescription[i].value}</p>
    <p>${projectUrl[i].value}</p>
    `;
        projPrev.appendChild(addedProject);
    }
}
//trying to make a download buttton
function DownloadResume() {
    window.print();
}
