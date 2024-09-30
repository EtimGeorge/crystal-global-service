// ISO Training Page JavaScript

// Testimonial data
const testimonials = [
    {
        content: "Saencrystal's ISO training program transformed our approach to quality management. Their expertise and hands-on guidance were invaluable.",
        author: "John Doe, Quality Manager at TechCorp Industries"
    },
    {
        content: "The customized ISO training we received was exactly what our team needed. It's made a significant impact on our operations and customer satisfaction.",
        author: "Jane Smith, Operations Director at EcoFriendly Solutions"
    },
    {
        content: "Implementing ISO standards seemed daunting at first, but Saencrystal's training made it manageable and even enjoyable. Highly recommended!",
        author: "Mike Johnson, CEO of SafetyFirst Manufacturing"
    },
    {
        content: "The ongoing support from Saencrystal after the initial training has been exceptional. They're truly committed to our success.",
        author: "Sarah Lee, Compliance Officer at GlobalTech"
    }
];

let currentTestimonialIndex = 0;

// Function to populate testimonial carousel
function populateTestimonialCarousel() {
    const carousel = document.querySelector('.testimonial-carousel');
    const testimonial = testimonials[currentTestimonialIndex];
    
    carousel.innerHTML = `
        <div class="testimonial">
            <p class="testimonial-content">"${testimonial.content}"</p>
            <p class="testimonial-author">- ${testimonial.author}</p>
        </div>
        <button onclick="changeTestimonial(-1)">Previous</button>
        <button onclick="changeTestimonial(1)">Next</button>
    `;
}

// Function to change testimonial
function changeTestimonial(direction) {
    currentTestimonialIndex += direction;
    if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    } else if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
    }
    populateTestimonialCarousel();
}

// Modal functionality
const modal = document.querySelector('.service-modal');
const closeModal = document.querySelector('.close-modal');

function openModal(service) {
    modal.style.display = 'block';
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    if (service === 'iso-training') {
        modalTitle.textContent = 'ISO Management Systems Training';
        modalContent.innerHTML = `
            <h4>Comprehensive Training Program:</h4>
            <ul>
                <li>ISO 9001 Quality Management Systems</li>
                <li>ISO 14001 Environmental Management Systems</li>
                <li>ISO 45001 Occupational Health and Safety Management Systems</li>
                <li>ISO 27001 Information Security Management Systems</li>
            </ul>
            <h4>Training Approach:</h4>
            <ul>
                <li>Interactive workshops and seminars</li>
                <li>Case studies and real-world examples</li>
                <li>Practical implementation guidance</li>
                <li>Post-training support and consultation</li>
            </ul>
            <p>Our expert trainers will guide you through the entire process of understanding, implementing, and maintaining ISO management systems, ensuring your organization achieves and sustains compliance with international standards.</p>
        `;
    }
}

closeModal.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


// Client showcase data
const clients = [
    {
        name: "TechCorp Industries",
        description: "Implemented ISO 9001 and ISO 27001",
        imageUrl: "path/to/techcorp-logo.jpg"
    },
    {
        name: "EcoFriendly Solutions",
        description: "Successfully certified in ISO 14001",
        imageUrl: "path/to/ecofriendly-logo.jpg"
    },
    {
        name: "SafetyFirst Manufacturing",
        description: "Implemented integrated ISO 9001 and ISO 45001 systems",
        imageUrl: "path/to/safetyfirst-logo.jpg"
    }
];

// Function to populate client showcase
function populateClientShowcase() {
    const showcase = document.getElementById('client-showcase');
    
    clients.forEach(client => {
        const clientCard = document.createElement('div');
        clientCard.className = 'client-card';
        
        clientCard.innerHTML = `
            <img src="${client.imageUrl}" alt="${client.name} Logo">
            <h3>${client.name}</h3>
            <p>${client.description}</p>
        `;
        
        showcase.appendChild(clientCard);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', (event) => {
    populateTestimonialCarousel();
    populateClientShowcase();

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));