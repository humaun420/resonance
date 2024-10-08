
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

