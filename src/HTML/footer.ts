

export const footerHTML = () => {
    const nav = document.createElement("nav");
    nav.id = "nav";
    const footer = document.createElement("footer");

    footer.appendChild(nav);

    const headingCases = document.createElement("a");
    headingCases.innerHTML = "Cases";
    const headingTheTeam = document.createElement("a");
    headingTheTeam.innerHTML = "The Team";
    const headingContact = document.createElement("a");
    headingContact.innerHTML = "Contact";
} 
