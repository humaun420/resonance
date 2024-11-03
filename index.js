// Elements
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button");

//GSAP configuration
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
});

// Toggle the menu and overlay visibility
menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
});

// Close the menu when clicking on the close icon
closeButton.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

// Close the menu if clicked outside (on the overlay)
overlay.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

// Close the menu when the screen size is greater than or equal to the 'md' breakpoint
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    mobileMenu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  }
});

const slideData = [
  {
    title: "Neuromail",
    description:
      "The revolutionary encryption project merging security and user experience. Users can seamlessly hide files within images, customizing the degree of deformation for optimal security.",
    bg_text_color: '#5547BA'
  },
  {
    title: "Password Manager",
    description:
      "Keep your passwords secure with advanced encryption techniques and an intuitive user interface.",
    bg_text_color: '#674E94'

  },
  {
    title: "Quantumography",
    description:
      "Explore the cutting edge of quantum-based cryptography for next-generation security.",
    bg_text_color: '#FFC530'
  },
  {
    title: "Password Manager 2",
    description:
      "An enhanced version with additional features for enterprise-level password security.",
    bg_text_color: '#13A0DD'
  },
  {
    title: "Textpass",
    description:
      "Encrypt your messages on the fly with zero knowledge encryption algorithms.",
    bg_text_color: '#5F54ED'
  },
  {
    title: "VPN",
    description:
      "Secure your connection with the most advanced VPN protocols available.",
    bg_text_color: '#BDA2EB'
  },
  {
    title: "GhostMail",
    description:
      "The revolutionary encryption project merging security and user experience. Users can seamlessly hide files within images, customizing the degree of deformation for optimal security.",
    bg_text_color: '#712EE3'
  },
];

const headingElement = document.getElementById("main-heading");
const descriptionElement = document.getElementById("main-description");

// const paginationLines = document.querySelectorAll(".pagination-line");

const buttons = document.querySelectorAll("[data-slide-index]");
buttons.forEach((button) => {
  document.querySelectorAll(`[data-slide-index="${button.getAttribute("data-slide-index")}"]`).forEach(targetElement=>{
    targetElement.addEventListener("click", function () {
      if (this.nodeName.toLowerCase() === 'img' && this.classList.contains("large-img")) {
        return;
      }

      const index = this.getAttribute("data-slide-index");
      const slide = slideData[index];

      headingElement.textContent = slide.title;
      descriptionElement.textContent = slide.description;
      document.querySelector('.bg_text_color').style.color = slide.bg_text_color;

      // Set all pagination lines to bg-gray-400 first

      const currentTarget = document.querySelectorAll(`[data-slide-index="${index}"]`);
      let line, image;

      currentTarget.forEach(targetElement=>{
        if (targetElement.nodeName.toLowerCase() === 'div') line = targetElement;
        if (targetElement.nodeName.toLowerCase() === 'img') image = targetElement;
      })

      buttons.forEach((button) => {
        if(button.nodeName.toLowerCase() === 'div') button.classList.remove('bg-white');
      })
      line.classList.add("bg-white");


      buttons.forEach((button) => {
        if(button.nodeName.toLowerCase() === 'img') button.classList.remove('large-img');
      })
      // Remove 'large-img' class from all images
      image.classList.add("large-img");
    });
  });
});

window.addEventListener("load", function () {
  document.querySelectorAll("[data-slide-index='0']").forEach(firstSlide=>{
    firstSlide.click(); // Simulate click on first image
  })

});

