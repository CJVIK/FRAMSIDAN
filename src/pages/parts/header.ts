import { IHeaderObject } from "../../models/IHeaderObject";

export const header = (title: HTMLHeadElement['innerHTML'], content?: IHeaderObject) => {
  const header = document.createElement("header");
  const article = document.createElement("article");
  article.classList.add("header-content-article");
  header.appendChild(article);

  // First section
  const section1 = document.createElement("section");
  section1.classList.add("header-content-title");
  const h1 = document.createElement("h1");
  h1.innerHTML = title;
  section1.appendChild(h1);

  // Add optional paragraph to first section
  if (content?.sectionTitleParagraph) {
    const p = document.createElement("p");
    p.innerHTML = content.sectionTitleParagraph;
    section1.appendChild(p);
  }
  article.appendChild(section1);

  // Second section
  const section2 = document.createElement("section");
  section2.classList.add("header-content-discription");
  const p1 = document.createElement("p");
  p1.innerHTML = content?.sectionDiscription.p1 || "Default discription";
  section2.appendChild(p1);

  // Add optional paragraph to second section
  if (content?.sectionDiscription.p2) {
    const p2 = document.createElement("p");
    p2.innerHTML = content.sectionDiscription.p2;
    section2.appendChild(p2);
  }
  article.appendChild(section2);

  return header;
};