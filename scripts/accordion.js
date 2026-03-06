let items = []
const accordion = document.getElementById("accordion");
let activeIndex = 0;

async function init(){
  if (!accordion) return;

  items = await loadProjectData();
  initAccordion(items);
  update();
}

async function loadProjectData(){
  const response = await fetch("data/featured-project-info.json");
  if (!response.ok) {
    throw new Error(`Failed to load featured projects (${response.status})`);
  }

  const projects = await response.json();
  return projects.map((project) => ({
    ...project,
    img: project.img.startsWith("../") ? project.img.replace("../", "") : project.img,
  }));
}

function initAccordion(items){
  items.forEach((item, index) => {
    const element = document.createElement("div");
    element.className = "accordion-item";
    element.tabIndex = 0;
    element.setAttribute("role", "button");
    element.setAttribute("aria-label", `Open ${item.title}`);
    if (index === activeIndex) element.classList.add("active");

    element.innerHTML = `
      <div class="accordion-card">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="overlay"></div>
        <span class="caption">${item.title}</span>
      </div>
    `;

    element.addEventListener("pointerenter", () => {
      activeIndex = index;
      update();
    });

    element.addEventListener("focus", () => {
      activeIndex = index;
      update();
    });

    element.addEventListener("click", () => {
      activeIndex = index;
      update();
    });

    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activeIndex = index;
        update();
      }
    });

    accordion.appendChild(element);
  });
}

function update() {
  [...accordion.children].forEach((element, i) => {
    element.classList.toggle("active", i === activeIndex);
    element.setAttribute("aria-pressed", String(i === activeIndex));
  });
}

init().catch((error) => {
  console.error(error);
});
