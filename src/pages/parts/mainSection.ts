const mainSection = document.getElementById("main");
if (mainSection) {
  const slideShow = document.createElement("section");
  const slideCardContainer = document.createElement("div");
  const slideCard = document.createElement("img");

  slideShow.className = "slideshow-container";
  slideCardContainer.className = "slidecard-container";
  slideCard.className = "slidecard-image";
  slideCard.src = "../assets/puss.jpg";

  slideCardContainer.appendChild(slideCard);
  slideShow.appendChild(slideCardContainer);
  mainSection.appendChild(slideShow);
}
