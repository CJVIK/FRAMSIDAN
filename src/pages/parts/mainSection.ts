const mainSection = document.getElementById("main");
if (mainSection) {
  const slideShow = document.createElement("section");
  const slideCardContainer = document.createElement("div");
  const slideCard = document.createElement("img");

  slideCardContainer.appendChild(slideCard);
  slideShow.appendChild(slideCardContainer);
  mainSection.appendChild(slideShow);
}
