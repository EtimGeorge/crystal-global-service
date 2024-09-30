// services-script.js

document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const modal = document.querySelector('.service-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalBenefits = document.getElementById('modal-benefits');
    const modalWhyUs = document.getElementById('modal-why-us');
    const closeModal = document.querySelector('.close-modal');
  
    const serviceDetails = {
      'business-development': {
        title: 'Business Development',
        description: 'Our Business Development service is designed to help your company grow and expand strategically. We provide comprehensive market analysis, develop tailored growth strategies, and facilitate partnerships to drive your business forward.',
        benefits: [
          'Identify new market opportunities',
          'Develop and implement growth strategies',
          'Establish strategic partnerships and alliances',
          'Improve competitive positioning'
        ],
        whyUs: 'With years of experience and a proven track record, our team of experts can help you navigate complex markets and achieve sustainable growth. We take a data-driven approach combined with industry insights to deliver results.'
      },
      'merchandise-sales': {
        title: 'Merchandise Sales',
        description: 'Our Merchandise Sales service focuses on optimizing your product offerings and sales strategies to maximize revenue. We provide end-to-end solutions from product selection to pricing strategies and visual merchandising.',
        benefits: [
          'Increase sales and revenue',
          'Optimize product mix and inventory',
          'Develop effective pricing strategies',
          'Enhance customer engagement and satisfaction'
        ],
        whyUs: 'Our team combines retail expertise with data analytics to create tailored merchandising strategies. We stay up-to-date with the latest trends and technologies to give you a competitive edge in the market.'
      },
      'store-management': {
        title: 'Store Management',
        description: 'Our Store Management service provides comprehensive solutions to streamline and improve your retail operations. From inventory management to staff training and customer experience enhancement, we cover all aspects of successful store management.',
        benefits: [
          'Improve operational efficiency',
          'Enhance customer experience',
          'Optimize inventory management',
          'Increase staff productivity and satisfaction'
        ],
        whyUs: 'With our holistic approach to store management, we help you create a seamless and profitable retail operation. Our solutions are scalable and can be customized to fit businesses of all sizes.'
      },
      'training-programs': {
        title: 'Training Programs',
        description: 'Our Training Programs are designed to empower your team with the skills and knowledge they need to excel. We offer customized curricula, both on-site and virtual options, and ongoing support to ensure continuous learning and development.',
        benefits: [
          'Improve employee skills and productivity',
          'Enhance job satisfaction and retention',
          'Stay competitive with up-to-date industry knowledge',
          'Foster a culture of continuous learning'
        ],
        whyUs: 'Our training programs are developed by industry experts and use cutting-edge learning methodologies. We offer flexible delivery options and can tailor our programs to your specific business needs and goals.'
      }
    };
  
    function openModal(service) {
      const details = serviceDetails[service];
      modalTitle.textContent = details.title;
      modalDescription.textContent = details.description;
      modalBenefits.innerHTML = details.benefits.map(benefit => `<li>${benefit}</li>`).join('');
      modalWhyUs.textContent = details.whyUs;
      modal.style.display = 'block';
    }
  
    function closeModalHandler() {
      modal.style.display = 'none';
    }
  
    serviceCards.forEach(card => {
      card.addEventListener('click', () => {
        const service = card.getAttribute('data-service');
        openModal(service);
      });
    });
  
    closeModal.addEventListener('click', closeModalHandler);
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModalHandler();
      }
    });
  
    // Add animation to service cards
    serviceCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('animate-card');
    });
  });

    // Testimonial carousel functionality
  // Add your carousel implementation here
  // Testimonial carousel functionality
  const testimonialCarousel = document.querySelector('.testimonial-carousel');
  const testimonials = Array.from(testimonialCarousel.querySelectorAll('.testimonial'));
  let currentTestimonialIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      if (i === index) {
        testimonial.style.display = 'block';
        testimonial.classList.add('active');
      } else {
        testimonial.style.display = 'none';
        testimonial.classList.remove('active');
      }
    });
  }

  function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
  }

  // Initial display
  showTestimonial(currentTestimonialIndex);

  // Manual navigation buttons
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
  });

  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.addEventListener('click', nextTestimonial);

  testimonialCarousel.appendChild(prevButton);
  testimonialCarousel.appendChild(nextButton);
  let carouselInterval;
  let isPaused = false;

  function startCarousel() {
    carouselInterval = setInterval(nextTestimonial, 5000);
  }

  function pauseCarousel() {
    clearInterval(carouselInterval);
    isPaused = true;
  }

  function resumeCarousel() {
    if (isPaused) {
      startCarousel();
      isPaused = false;
    }
  }

  testimonialCarousel.addEventListener('mouseenter', pauseCarousel);
  testimonialCarousel.addEventListener('mouseleave', resumeCarousel);
  document.addEventListener('DOMContentLoaded', function() {
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const testimonials = Array.from(testimonialCarousel.querySelectorAll('.testimonial'));
    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        if (i === index) {
          testimonial.style.display = 'block';
          testimonial.classList.add('active');
        } else {
          testimonial.style.display = 'none';
          testimonial.classList.remove('active');
        }
      });
    }

    function nextTestimonial() {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      showTestimonial(currentTestimonialIndex);
    }

    // Initial display
    showTestimonial(currentTestimonialIndex);

    // Auto-rotate testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);
  });
