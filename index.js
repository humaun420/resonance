// Elements
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button");

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
  },
  {
    title: "Password Manager",
    description:
      "Keep your passwords secure with advanced encryption techniques and an intuitive user interface.",
  },
  {
    title: "Quantumography",
    description:
      "Explore the cutting edge of quantum-based cryptography for next-generation security.",
  },
  {
    title: "Password Manager 2",
    description:
      "An enhanced version with additional features for enterprise-level password security.",
  },
  {
    title: "Textpass",
    description:
      "Encrypt your messages on the fly with zero knowledge encryption algorithms.",
  },
  {
    title: "VPN",
    description:
      "Secure your connection with the most advanced VPN protocols available.",
  },
  {
    title: "Neuromail",
    description:
      "The email system that protects your communication with quantum encryption.",
  },
];

const headingElement = document.getElementById("main-heading");
const descriptionElement = document.getElementById("main-description");

const paginationLines = document.querySelectorAll(".pagination-line");

const images = document.querySelectorAll("[data-slide-index]");
images.forEach((image) => {
  image.addEventListener("click", function () {
    if (this.classList.contains("large-img")) {
      return;
    }

    const index = this.getAttribute("data-slide-index");
    const slide = slideData[index];

    headingElement.textContent = slide.title;
    descriptionElement.textContent = slide.description;

    // Set all pagination lines to bg-gray-400 first
    paginationLines.forEach((line) => {
      line.classList.remove("bg-white");
      line.classList.add("bg-gray-400");
    });

    // Add 'bg-white' to the clicked image's pagination line
    paginationLines[index].classList.add("bg-white");
    paginationLines[index].classList.remove("bg-gray-400");

    // Remove 'large-img' class from all images
    images.forEach((img) => img.classList.remove("large-img"));

    // Add 'large-img' class to the clicked image
    this.classList.add("large-img");
  });
});

window.addEventListener("load", function () {
  const firstImage = images[0];
  firstImage.click(); // Simulate click on first image
});



// internt slide
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const steppers = document.querySelectorAll(".stepper");
let currentIndex = 0;
let previousIndex = null;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === previousIndex) {
      slide.classList.remove("animate-fadeIn");
      slide.classList.add("animate-fadeOut"); // Fade out the previous slide
    }
    slide.classList.remove("active");
    slide.classList.add("hidden"); // Hide all slides
  });

  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  const currentSlide = slides[currentIndex];
  currentSlide.classList.remove("hidden", "animate-fadeOut"); // Show and fade in current slide
  currentSlide.classList.add("animate-fadeIn", "active");

  // Update the steppers
  updateSteppers(currentIndex);

  previousIndex = currentIndex;
}

function updateSteppers(index) {
    // Determine the active step based on the current slide index
    const activeStep = Math.floor(index / 2) + 1;
  
    steppers.forEach((stepper) => {
      const stepNumber = parseInt(stepper.getAttribute("data-step"));
      
      // Add active class to the current step
      if (stepNumber === activeStep) {
        stepper.classList.add("active-step");
        stepper.classList.remove("completed-step");
      } 
      // Add completed class to previous steps
      else if (stepNumber < activeStep) {
        stepper.classList.remove("active-step");
        stepper.classList.add("completed-step");
      } 
      // Remove both active and completed classes for upcoming steps
      else {
        stepper.classList.remove("active-step", "completed-step");
      }
    });
  }
  


// Show the first slide initially
showSlide(currentIndex);

// Auto slide every 3 seconds
setInterval(() => {
  showSlide(currentIndex + 1);
}, 3000);
