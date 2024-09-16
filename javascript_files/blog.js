document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
          header.style.transform = 'translateY(-100%) rotateX(10deg)';
      } else {
          header.style.transform = 'translateY(0) rotateX(0)';
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, false);

  const blogCards = document.querySelectorAll('.blog-card');
  blogCards.forEach((card, index) => {
      card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const deltaX = (x - centerX) / centerX;
          const deltaY = (y - centerY) / centerY;

          card.style.transform = `scale(1.05) rotateY(${deltaX * 10}deg) rotateX(${-deltaY * 10}deg)`;
      });

      card.addEventListener('mouseleave', () => {
          card.style.transform = 'scale(1) rotateY(0) rotateX(0)';
      });
  });
});