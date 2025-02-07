export const footer = () => {
  const nav = document.createElement("nav");
  nav.id = "nav";
  const footer = document.createElement("footer");

  footer.appendChild(nav);

  const linkHome = document.createElement("a");
  linkHome.href = "/";
  linkHome.innerText = "Home";
  const linkCases = document.createElement("a");
  linkCases.href = "/pages/cases.html";
  linkCases.innerText = "Cases";
  const linkTheTeam = document.createElement("a");
  linkTheTeam.href = "/pages/team.html";
  linkTheTeam.innerHTML = "The Team";
  const linkContact = document.createElement("a");
  linkContact.innerHTML = "Contact";

  nav.append(linkHome, linkCases, linkTheTeam, linkContact);

  return footer;
};