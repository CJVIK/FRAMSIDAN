export const footer = () => {
  const footer = document.createElement("footer"), nav = document.createElement("nav"), linkHome = document.createElement("a"),
    linkCases = document.createElement("a"), linkTheTeam = document.createElement("a"), linkContact = document.createElement("a");

  nav.id = "nav";
  
  Object.assign(linkHome, {
    href: "/",
    innerText: "Home"
  });

  Object.assign(linkCases, {
    href: "/pages/cases.html",
    innerText: "Cases"
  });

  Object.assign(linkTheTeam, {
    href: "/pages/team.html",
    innerText: "The Team"
  });

  Object.assign(linkContact, {
    // href: "/pages/contact.html",
    innerText: "Contact"
  });
  
  nav.append(linkHome, linkCases, linkTheTeam, linkContact);
  footer.appendChild(nav);

  return footer;
};