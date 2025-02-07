import { IHeaderObject } from "../../models/IHeaderObject";

export const header = (title: HTMLHeadElement['innerHTML'], content?: IHeaderObject) => {
  const header = document.createElement("header"), article = document.createElement("article"),  section1 = document.createElement("section"),
    section2 = document.createElement("section"), h1 = document.createElement("h1"), p = document.createElement("p"), p1 = document.createElement("p"),
    p2 = document.createElement("p");

  article.classList.add("header-content-article");

  // First section
  section1.classList.add("header-content-title");
  
  h1.innerHTML = title;
  
  section1.appendChild(h1);
  
  // Add optional paragraph to first section
  if (content?.sectionTitleParagraph) {
    p.innerHTML = content.sectionTitleParagraph;
  
    section1.appendChild(p);
  }
  
  // Second section
  section2.classList.add("header-content-discription");
  
  p1.innerHTML = content?.sectionDiscription.p1 || "Default discription";
  
  section2.appendChild(p1);
  
  // Add optional paragraph to second section
  if (content?.sectionDiscription.p2) {
    p2.innerHTML = content.sectionDiscription.p2;
  
    section2.appendChild(p2);
  }
  
  article.append(section1, section2);
  header.appendChild(article);

  return header;
};