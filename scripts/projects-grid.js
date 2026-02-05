import * as THREE from 'three';

let projects = [];

async function init(){
    projects = await loadProjectData();
    renderProjectGrid(projects);
}


async function loadProjectData(){
    const response = await fetch("../data/project-info.json");
    const projects = await response.json();
    return projects;
}

function renderProjectGrid(projectList, selector="all"){
    const containerElement = document.querySelector(".js-projects-grid");
    let html = "";
    projectList.forEach(project => {
        if(selector==="all"||project.category.includes(selector)){
            html += `
            <div class="project-card">
                <div class="img-container">
                    <img src="${project.img}.png">
                </div>
                <h3 class="project-title">${project.title}</h3>
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