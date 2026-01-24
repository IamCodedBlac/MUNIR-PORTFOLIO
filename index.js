const textArray = [
  "Front-end Developer",
  "Web Developer",
  "NetOps Engineer",
  "Web Designer",
  "Community Moderator",
];

let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenWords = 2000;

const dynamicTextElement = document.querySelector(".animation span");

function typeText() {
  const currentWord = textArray[currentIndex];

  if (isDeleting) {
    charIndex--;
    dynamicTextElement.textContent = currentWord.slice(0, charIndex);
  } else {
    charIndex++;
    dynamicTextElement.textContent = currentWord.slice(0, charIndex);
  }

  let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
  if (!isDeleting && charIndex === currentWord.length) {
    currentSpeed = delayBetweenWords;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % textArray.length;
  }

  setTimeout(typeText, currentSpeed);
}

document.addEventListener("DOMContentLoaded", function () {
  const dynamicTextElement = document.querySelector("animation span");
  typeText();
});

let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);
let sections = document.querySelectorAll(`section`);
let navlinks = document.querySelectorAll(`header nav a`);

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute(`id`);

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove(`active`);
        if (link.getAttribute(`href`) === `#${id}`) {
          link.classList.add(`active`);
        }
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle(`bx-x`);
  navbar.classList.toggle(`active`);
};

document.getElementById("menu-icon").addEventListener("click", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
});

let ageOne = 15;
if (ageOne < 18) {
  let ageOutcome = "You are a minor.";
  console.log(ageOutcome);
} else console.log("You are an adult.");
