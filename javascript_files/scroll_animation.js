document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.work-showcase-track');
  const slides = track.querySelectorAll('.work-showcase-slide');
  const slideWidth = slides[0].offsetWidth + 20; // Width + margin
  let currentIndex = 0;

  // Clone the first slide and append it to the end
  const firstSlideClone = slides[0].cloneNode(true);
  track.appendChild(firstSlideClone);

  // Set the width of the track
  track.style.width = `${slideWidth * (slides.length + 1)}px`;

  function nextSlide() {
      currentIndex++;
      track.style.transition = 'transform 0.5s ease';
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

      if (currentIndex === slides.length) {
          setTimeout(() => {
              track.style.transition = 'none';
              track.style.transform = 'translateX(0)';
              currentIndex = 0;
          }, 500);
      }
  }

  // Start the automatic scrolling
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});