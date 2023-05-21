const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0;

const slider = document.getElementById("slider");
const tagLine = document.getElementById("tagLine");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const dotsContainer = document.getElementById("dotsContainer");

function updateSlider() {
  const currentSlide = slides[currentIndex];
  slider.src = `./assets/images/slideshow/` + currentSlide.image;
  tagLine.innerHTML = currentSlide.tagLine;

  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

dotsContainer.innerHTML = "";

slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

updateSlider();