let items = []
const accordion = document.getElementById("accordion");
let activeIndex = 0;

async function init(){
  items = await loadProjectData();
  initAccordion(items);
}

async function loadProjectData(){
  const response = await fetch("../data/featured-project-info.json");
  const projects = await response.json();
  return projects;
}

function initAccordion(items){
  items.forEach((item, index) => {
    const element = document.createElement("div");
    element.className = "accordion-item";
    if (index === activeIndex) element.classList.add("active");

    element.innerHTML = `
      <div class="accordion-card">
        <img src="${item.img}" alt="${item.title}">
        <div class="overlay"></div>
        <span class="caption">${item.title}</span>
      </div>
    `;

    element.addEventListener("mouseenter", () => {
      activeIndex = index;
      update();
    });

    accordion.appendChild(element);
  });
}

function update() {
  [...accordion.children].forEach((element, i) => {
    element.classList.toggle("active", i === activeIndex);
  });
}

init();