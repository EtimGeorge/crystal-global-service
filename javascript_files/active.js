document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-item');
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
      }
  });

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-links');

  // hamburger.addEventListener('click', () => {
  //     hamburger.classList.toggle('active');
  //     navMenu.classList.toggle('active');
  // });

  document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
  }));
});