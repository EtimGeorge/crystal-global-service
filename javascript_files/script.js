document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const newsletterForm = document.getElementById('newsletter-form');

  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links li').forEach(n => n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
  }));

  // Newsletter form submission
  if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const email = this.querySelector('input[type="email"]').value;
          alert(`Thank you for subscribing with email: ${email}`);
          this.reset();
      });
  }

  // Scroll animation
  const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (elementTop < windowHeight - 100) {
              element.classList.add('show');
          }
      });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check on page load

  // Add animation to service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('animate-card');
  });

  // Add animation to project items
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
      item.classList.add('animate-project');
  });
});