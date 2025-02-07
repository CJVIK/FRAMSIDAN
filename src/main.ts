import { application } from "./pages/parts/app";

const main = application("Framsidan"), heroContainer = document.createElement("div"), heroPicture = document.createElement("div");

heroContainer.classList.add("hero");
heroPicture.classList.add("heroBackground");

heroContainer.append(heroPicture);
main.append(heroContainer);