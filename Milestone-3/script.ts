//Personal Info Section
let firstName = document.getElementById("first-name") as HTMLInputElement,
  middleName = document.getElementById("middle-name") as HTMLInputElement,
  lastName = document.getElementById("last-name") as HTMLInputElement,
  Email = document.getElementById("email") as HTMLInputElement,
  phoneNumber = document.getElementById("phone-number") as HTMLInputElement

//Education Section
let eduDiv = document.getElementById("edu-sec"),
  schoolName = document.getElementsByClassName(
    "school"
  ) as HTMLCollectionOf<HTMLInputElement>,
  degreeName = document.getElementsByClassName(
    "degree"
  ) as HTMLCollectionOf<HTMLInputElement>,
  schoolLocation = document.getElementsByClassName(
    "location-edu"
  ) as HTMLCollectionOf<HTMLInputElement>,
  eduStarting = document.getElementsByClassName(
    "starting-date-edu"
  ) as HTMLCollectionOf<HTMLInputElement>,
  eduEnding = document.getElementsByClassName(
    "ending-date-edu"
  ) as HTMLCollectionOf<HTMLInputElement>,
  eduDescription = document.getElementsByClassName(
    "brief-description-education"
  ) as HTMLCollectionOf<HTMLInputElement>,
  addEdu = document.getElementById("add-education");

//Work Experience
let workDiv = document.getElementById("work-sec"),
  jobTitle = document.getElementsByClassName("work-title") as HTMLCollectionOf<HTMLInputElement>,
  companyName = document.getElementsByClassName("work-organization") as HTMLCollectionOf<HTMLInputElement>,
  workLocation = document.getElementsByClassName("location-work") as HTMLCollectionOf<HTMLInputElement>,
  workStarting = document.getElementsByClassName("starting-date-work") as HTMLCollectionOf<HTMLInputElement>,
  workEnding = document.getElementsByClassName("ending-date-work") as HTMLCollectionOf<HTMLInputElement>,
  workDescription = document.getElementsByClassName("brief-description-work") as HTMLCollectionOf<HTMLInputElement>,
  addWork = document.getElementById("add-work");

//Skills
let skillInput = document.getElementById("skills") as HTMLInputElement;

//Projects
let projectDiv = document.getElementById("projects-sec"),
  projectName = document.getElementsByClassName("project-title"),
  projectUrl = document.getElementsByClassName("project-url"),
  projectDescription = document.getElementsByClassName(
    "brief-description-project"
  ),
  addProject = document.getElementById("add-project");

//Languages
let languages = document.getElementById("languages") as HTMLInputElement;

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
let namePrev = document.getElementById("name-prev") as HTMLElement;
let emailPrev = document.getElementById("email-prev") as HTMLElement;
let phonePrev = document.getElementById("pn-prev") as HTMLElement;
let skillSet = document.getElementById("skill-list") as HTMLElement;
let langList = document.getElementById("lang-list") as HTMLElement;
let eduPrev = document.getElementById("edu-prev") as HTMLElement;
let workPrev = document.getElementById("work-prev") as HTMLElement;
let projPrev = document.getElementById("proj-prev") as HTMLElement;


//The most difficult part personally for me

const profilePic = document.getElementById("pfp") as HTMLInputElement,
      pfpPrev = document.getElementById("pfp-prev") as HTMLDivElement;

function updatePfp() {
  const image = profilePic?.files?.[0]

  if (image) {
    const imageUrl = URL.createObjectURL(image)
    pfpPrev.style.backgroundImage = `url(${imageUrl})`
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

  eduPrev.innerHTML = ""

  for (let i = 0; i < degreeName.length; i++) {
    let addedDegree = document.createElement("div");
    addedDegree.innerHTML = `
    <h4>${(degreeName[i] as HTMLInputElement).value} at ${
      (schoolName[i] as HTMLInputElement).value
    }</h4>
    <p>${(schoolLocation[i] as HTMLInputElement).value}</p>
    <p>${(eduStarting[i] as HTMLInputElement).value} - ${
      (eduEnding[i] as HTMLInputElement).value
    }</p>
    <p>${(eduDescription[i] as HTMLInputElement).value}</p>
    `;
    eduPrev.appendChild(addedDegree)
  }

  //Work update

  workPrev.innerHTML = ""

  for (let i = 0; i < jobTitle.length; i++) {
    let addedWork = document.createElement("div");
    addedWork.innerHTML = `
    <h4>${(jobTitle[i] as HTMLInputElement).value} at ${
      (companyName[i] as HTMLInputElement).value
    }</h4>
    <p>${(workLocation[i] as HTMLInputElement).value}</p>
    <p>${(workStarting[i] as HTMLInputElement).value} - ${
      (workEnding[i] as HTMLInputElement).value
    }</p>
    <p>${(workDescription[i] as HTMLInputElement).value}</p>
    `;
    workPrev.appendChild(addedWork)
  }

  //Project updaye

  projPrev.innerHTML = ""

  for (let i = 0; i < projectName.length; i++) {
    let addedProject = document.createElement("div");
    addedProject.innerHTML = `
    <h4>${(projectName[i] as HTMLInputElement).value}</h4>
    <p>${(projectDescription[i] as HTMLInputElement).value}</p>
    <p>${(projectUrl[i] as HTMLInputElement).value}</p>
    `;
    projPrev.appendChild(addedProject)
  }

}

// Dynamic Loader
setInterval(updateResume, 1000);


//trying to make a download buttton
function DownloadResume() {
  window.print()
}
