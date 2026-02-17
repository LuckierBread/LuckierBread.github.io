let projects = [];

async function init(){
    projects = await loadProjectData();
    renderProjectGrid(projects);
}


async function loadProjectData(){
    const response = await fetch("data/project-info.json");
    const projects = await response.json();
    return projects;
}

function renderProjectGrid(projectList, selector="all"){
    const containerElement = document.querySelector(".js-projects-grid");
    let html = "";
    projectList.forEach(project => {
        if(selector==="all"||project.category.includes(selector)){
            const normalizedImage = project.img.startsWith("../")
              ? project.img.replace("../", "")
              : project.img;
            const actionHref = project.github || "#";
            const actionClass = actionHref === "#" ? "project-action placeholder" : "project-action";
            const actionTarget = project.github ? ' target="_blank" rel="noopener noreferrer"' : "";
            const actionMarkup = `
              <a class="${actionClass}" href="${actionHref}"${actionTarget}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.5-.2.5-.4v-1.6c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4a3.1 3.1 0 0 1 .8-2.1 2.9 2.9 0 0 1 .1-2.1s.7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.3.7.3 1.5.1 2.1a3 3 0 0 1 .8 2.1c0 3.1-1.9 3.8-3.8 4 .3.2.6.8.6 1.6v2.4c0 .2.1.5.5.4A8.5 8.5 0 0 0 12 3.5Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
                </svg>
                <span>See Repo</span>
              </a>`;

            html += `
            <div class="project-card">
                <div class="img-container">
                    <img src="${normalizedImage}.png" alt="${project.title}">
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-links">
                        ${actionMarkup}
                    </div>
                </div>
            </div>`
        }
    });

    containerElement.innerHTML= html;
}

const allElement = document.querySelector(".js-all-button");
const aiElement = document.querySelector(".js-ai-button");
const roboticsElement = document.querySelector(".js-robotics-button");
const webElement = document.querySelector(".js-web-button");

allElement.addEventListener("click",()=>{
    renderProjectGrid(projects)
    allElement.classList.add("selected")
    aiElement.classList.remove("selected")
    roboticsElement.classList.remove("selected")
    webElement.classList.remove("selected")
});

aiElement.addEventListener("click",()=>{
    renderProjectGrid(projects, "AI")
    allElement.classList.remove("selected")
    aiElement.classList.add("selected")
    roboticsElement.classList.remove("selected")
    webElement.classList.remove("selected")
});

roboticsElement.addEventListener("click",()=>{
    renderProjectGrid(projects, "robot")
    allElement.classList.remove("selected")
    aiElement.classList.remove("selected")
    roboticsElement.classList.add("selected")
    webElement.classList.remove("selected")
});

webElement.addEventListener("click",()=>{
    renderProjectGrid(projects, "web")
    allElement.classList.remove("selected")
    aiElement.classList.remove("selected")
    roboticsElement.classList.remove("selected")
    webElement.classList.add("selected")
});

init();
