import { application } from "./parts/app";
import { teamCards } from "./parts/teamCards";

const main = application("Our Team");

main.append(teamCards());