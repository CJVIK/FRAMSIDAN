import { HTMLHelper } from "../../Helpers/HTMLHelper";
import { application } from "./app";

const case1 = {
  front: `<img src="../assets/API-omdb.png" alt="En applikation för filmer">`,
  back: "<p>En applikation för filmer</p>",
};
const case2 = {
  front: `<img src="../assets/konst-i-konsten.png" alt="En applikation för 'konst i konsten'">`,
  back: "<p>En applikation för 'konst i konsten'</p>",
};
const case3 = {
  front: `<img src="../assets/the-todos.png" alt="En applikation för to-do-listor">`,
  back: "<p>En applikation för to-do-listor</p>",
};

const cases = [case1, case2, case3];

const main = application("Cases");

main.append(HTMLHelper.createFlipCards(cases));
