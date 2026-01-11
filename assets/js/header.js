// Header Functionality
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const projectsDropdownButton = document.querySelector('[data-projects-dropdown-button]');
  const projectsDropdown = document.querySelector('[data-projects-dropdown]');
  const projectsDropdownMobile = document.querySelector('[data-projects-dropdown-mobile]');
  const projectsDropdownButtonMobile = document.querySelector('[data-projects-dropdown-button-mobile]');

  // Scroll effect
  let lastScroll = 0;
  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
      header.classList.add('bg-white/95', 'backdrop-blur-lg', 'shadow-lg');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('bg-white/95', 'backdrop-blur-lg', 'shadow-lg');
      header.classList.add('bg-transparent');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Mobile menu toggle
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenuButton.querySelector('[data-icon="menu"]').classList.add('hidden');
        mobileMenuButton.querySelector('[data-icon="x"]').classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.querySelector('[data-icon="menu"]').classList.remove('hidden');
        mobileMenuButton.querySelector('[data-icon="x"]').classList.add('hidden');
      }
    });
  }

  // Desktop projects dropdown
  if (projectsDropdownButton && projectsDropdown) {
    projectsDropdownButton.addEventListener('mouseenter', function() {
      projectsDropdown.classList.remove('hidden');
    });

    projectsDropdownButton.addEventListener('mouseleave', function() {
      setTimeout(() => {
        if (!projectsDropdown.matches(':hover') && !projectsDropdownButton.matches(':hover')) {
          projectsDropdown.classList.add('hidden');
        }
      }, 100);
    });

    projectsDropdown.addEventListener('mouseleave', function() {
      projectsDropdown.classList.add('hidden');
    });

    projectsDropdown.addEventListener('mouseenter', function() {
      projectsDropdown.classList.remove('hidden');
    });
  }

  // Mobile projects dropdown
  if (projectsDropdownButtonMobile && projectsDropdownMobile) {
    projectsDropdownButtonMobile.addEventListener('click', function(e) {
      e.preventDefault();
      const isOpen = !projectsDropdownMobile.classList.contains('hidden');
      if (isOpen) {
        projectsDropdownMobile.classList.add('hidden');
        projectsDropdownButtonMobile.querySelector('svg').style.transform = 'rotate(0deg)';
      } else {
        projectsDropdownMobile.classList.remove('hidden');
        projectsDropdownButtonMobile.querySelector('svg').style.transform = 'rotate(180deg)';
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Close mobile menu if open
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.querySelector('[data-icon="menu"]').classList.remove('hidden');
            mobileMenuButton.querySelector('[data-icon="x"]').classList.add('hidden');
          }
        }
      }
    });
  });
});
