import { HTMLHelper } from "../helpers/HTMLHelper";
import * as app from "./parts/app";

const case1 = {
  front: `<img src="/src/img/API-omdb.png" alt="En applikation för filmer">`,
  back: "<p>En applikation för filmer</p>",
}, case2 = {
  front: `<img src="/src/img/the-todos.png" alt="En applikation för to-do-listor">`,
  back: "<p>En applikation för to-do-listor</p>",
},  cases = [case1, case2],  main = app.application("Cases");

main.append(HTMLHelper.createFlipCards(cases));