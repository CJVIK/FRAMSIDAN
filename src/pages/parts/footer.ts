export const footer = () => {
  const nav = document.createElement("nav");
  nav.id = "nav";
  const footer = document.createElement("footer");

  footer.appendChild(nav);

  const headingCases = document.createElement("a");
  headingCases.href = "/src/pages/cases.html";
  headingCases.innerText = "Cases";
  const headingTheTeam = document.createElement("a");
  headingTheTeam.innerHTML = "The Team";
  const headingContact = document.createElement("a");
  headingContact.innerHTML = "Contact";

  nav.append(headingCases, headingTheTeam, headingContact);

  return footer;
};
