
    // Elements
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('close-button');

    // Toggle the menu and overlay visibility
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    });

    // Close the menu when clicking on the close icon
    closeButton.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    });

    // Close the menu if clicked outside (on the overlay)
    overlay.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    });

    // Close the menu when the screen size is greater than or equal to the 'md' breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            mobileMenu.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }
    });


const slideData = [
    {
        title: 'Neuromail',
        description: 'The revolutionary encryption project merging security and user experience. Users can seamlessly hide files within images, customizing the degree of deformation for optimal security.'
    },
    {
        title: 'Password Manager',
        description: 'Keep your passwords secure with advanced encryption techniques and an intuitive user interface.'
    },
    {
        title: 'Quantumography',
        description: 'Explore the cutting edge of quantum-based cryptography for next-generation security.'
    },
    {
        title: 'Password Manager 2',
        description: 'An enhanced version with additional features for enterprise-level password security.'
    },
    {
        title: 'Textpass',
        description: 'Encrypt your messages on the fly with zero knowledge encryption algorithms.'
    },
    {
        title: 'VPN',
        description: 'Secure your connection with the most advanced VPN protocols available.'
    },
    {
        title: 'Neuromail',
        description: 'The email system that protects your communication with quantum encryption.'
    }
];


const headingElement = document.getElementById('main-heading');
const descriptionElement = document.getElementById('main-description');


const paginationLines = document.querySelectorAll('.pagination-line');


const images = document.querySelectorAll('[data-slide-index]');
images.forEach(image => {
    image.addEventListener('click', function() {
   
        if (this.classList.contains('large-img')) {
            return;
        }

        const index = this.getAttribute('data-slide-index');
        const slide = slideData[index];
        
       
        headingElement.textContent = slide.title;
        descriptionElement.textContent = slide.description;

     
        paginationLines.forEach(line => line.classList.remove('bg-white'));
        paginationLines[index].classList.add('bg-white');

       
        images.forEach(img => img.classList.remove('large-img')); 
        this.classList.add('large-img'); 
    });
});


window.addEventListener('load', function() {
    const firstImage = images[0];
    firstImage.click();


    paginationLines[0].classList.add('bg-white');
});

// internt slide 
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // Remove active class from all slides
  });
  
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  slides[currentIndex].classList.add('active'); // Add active class to the current slide
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

// Show the first slide initially
showSlide(currentIndex);

// Auto slide every 3 seconds
setInterval(() => {
  showSlide(currentIndex + 1);
}, 3000);

