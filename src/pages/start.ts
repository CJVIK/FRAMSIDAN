import { application } from "./parts/app";

const main = application("Start page");
document.body.append(main);

// const heroContainer = document.createElement("div");
// heroContainer.classList.add("hero");

// const heroPicture = document.createElement("div");
// heroPicture.classList.add("heroBackground");

// main.appendChild(heroContainer);
// heroContainer.appendChild(heroPicture);
// console.log(document.body.innerHTML);
// console.log(main);


if (main) {
    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero");
  
    const heroPicture = document.createElement("div");
    heroPicture.classList.add("heroBackground");
  
    heroContainer.append(heroPicture);
    main.append(heroContainer); 
  
    console.log("Hero added:", heroContainer);
  } else {
    console.error("Main element not found!");
  }