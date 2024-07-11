const container = document.getElementById("container");
const header = document.querySelector("header");
import {make_project} from "./form.js";
import {build_projects} from "./projects.js";

function make_head_foot(){
    const projectsDiv = document.createElement('div');
    projectsDiv.className = "projects";
    container.appendChild(projectsDiv);
    // const where = document.createElement("h1");
    // where.textContent = "Home";
    // header.appendChild(where);
    // const navbar = document.createElement("ul");
    // const navButtons = ["Home", "Projects"];
    // const navLinks = [build_home, build_projects];
    // for(let i = 0; i < navButtons.length; i++){
    //     const but = document.createElement('button');
    //     but.textContent = "Go To" + navButtons[i];
    //     but.id = navButtons[i];
    //     but.addEventListener("click", navLinks[i]);
    //     navbar.appendChild(but);
    // }
    // header.appendChild(navbar);
}

function new_project(){
    let project_div = document.createElement('div');
    project_div.className = "projectHome";
    let newProjectButton = document.createElement('button');
    newProjectButton.textContent = "New Project";
    newProjectButton.addEventListener("click", () => {
        make_project();
    });
    project_div.appendChild(newProjectButton);
    container.appendChild(project_div);
}

function build_home(){
    // const where = document.querySelector("h1");
    // where.textContent = "Home";
    
    new_project();
    

    build_projects();
  //  see_projects();
}

function clear(element){
    element.replaceChildren();
}

export {make_head_foot, build_home ,clear};