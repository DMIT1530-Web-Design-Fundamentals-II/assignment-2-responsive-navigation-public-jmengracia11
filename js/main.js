document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    const dropdownLinks = document.querySelectorAll('.first-link');
  
    // Toggle the navigation menu
    menuIcon.addEventListener('click', function() {
      nav.classList.toggle('active-nav');
    });
  
    // Toggle the dropdown menus for mobile view
    dropdownLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        // Prevent default action if on mobile
        if (window.innerWidth < 950) {
          event.preventDefault();
          const dropdownMenu = this.nextElementSibling;
          dropdownMenu.classList.toggle('open');
        }
      });
    });
  });