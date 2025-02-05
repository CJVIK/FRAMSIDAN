

export const footerHTML = () => {
    const nav = document.createElement("nav");
    nav.id = "nav";
    const footer = document.getElementById("footer");

    if (footer) {
        footer.appendChild(nav);
    } else {
        console.error("Footer element not found.");
    }

    const headingCases = document.createElement("h1");
    headingCases.innerHTML = "Cases";
    const headingTheTeam = document.createElement("h1");
    headingTheTeam.innerHTML = "The Team";
    const headingContact = document.createElement("h1");
    headingContact.innerHTML = "Contact";

    if(nav) {
        nav.append(headingCases, headingContact, headingTheTeam);
    }
    else {
        console.error("Nav element not found.");
    }
}
