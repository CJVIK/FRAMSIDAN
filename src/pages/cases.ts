import { HTMLHelper } from "../helpers/HTMLHelper";
import * as app from "./parts/app";

const case1 = {
  front: `<img src="../assets/API-omdb.png" alt="En applikation för filmer">`,
  back: "<p>En applikation för filmer</p>",
};
const case2 = {
  front: `<img src="../assets/the-todos.png" alt="En applikation för to-do-listor">`,
  back: "<p>En applikation för to-do-listor</p>",
};

const cases = [case1, case2];

const main = app.application("Cases");

main.append(HTMLHelper.createFlipCards(cases));
