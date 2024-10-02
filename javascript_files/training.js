// Training Page Functionality

document.addEventListener('DOMContentLoaded', () => {
    const enrollButtons = document.querySelectorAll('.enroll-btn');
    const trainingPrograms = document.querySelectorAll('.training-program');
  
    // Enroll button functionality
    enrollButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const programTitle = e.target.closest('.training-program').querySelector('h2').textContent;
        alert(`Thank you for your interest in "${programTitle}". An enrollment form will be sent to your email shortly.`);
      });
    });
  
    // Smooth scroll to program when clicked from navigation
    const programLinks = document.querySelectorAll('a[href^="#"]');
    programLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  
    // Add animation class when program comes into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    trainingPrograms.forEach(program => {
      observer.observe(program);
    });
  });
  
  // Search functionality
  const searchInput = document.getElementById('program-search');
  const programList = document.getElementById('program-list');
  
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const programs = programList.querySelectorAll('.training-program');
  
    programs.forEach(program => {
      const title = program.querySelector('h2').textContent.toLowerCase();
      const description = program.querySelector('p').textContent.toLowerCase();
  
      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        program.style.display = 'block';
      } else {
        program.style.display = 'none';
      }
    });
  });