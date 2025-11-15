import {projectTitles } from "./project-data.js"
import { projectFiles } from "./project-data.js";


export function createProjectList(){

    projectTitles.forEach((project, index) => {
        const button = document.createElement('button');
        button.classList.add('projectbutton');
        button.onclick = openProject(project.id)

        const title = document.createElement('p');
        title.textContent = project.title;
        title.classList.add('projecttitle');
        button.appendChild(title);

        const summary = document.createElement('p');
        summary.textContent = project.summary;
        summary.classList.add('projectsummary')
        button.appendChild(summary);

        

        document.getElementById("projectList").append(button);
    });
}

function openProject(id){
    const data = projectFiles[id];
    const descriptionDiv = document.getElementById("projectDescription")
}