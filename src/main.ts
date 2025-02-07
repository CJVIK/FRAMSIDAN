import { application } from "./pages/parts/app";

const main = application("Framsidan", {
    sectionTitle: {
      h1: "FRAMSIDAN",
      p: "RIP LUKAs FIGMA - som kom till god användning i denna uppgift",
    },
    sectionDiscription: {
      p1: "Det är inte bara",
      p2: "Insidan som räknas",
    },
  }), heroContainer = document.createElement("div"), heroPicture = document.createElement("div");

heroContainer.classList.add("hero");
heroPicture.classList.add("heroBackground");

heroContainer.append(heroPicture);
main.append(heroContainer);