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

// Function to handle "Read More" button clicks
// This code defines a function that is triggered when a user clicks on a "Read More" button.
// It performs the following actions:
// 1. Prevents the default link behavior
// 2. Finds the closest parent element with the class 'blog-card'
// 3. Extracts the article title from the h2 element within the blog card
// 4. Converts the title into a URL-friendly slug by lowercasing, replacing spaces with hyphens,
//    and removing non-alphanumeric characters
// 5. Redirects the user to an 'article.html' page with the slug as a query parameter
function handleReadMore(event) {
  event.preventDefault();
  const blogCard = event.target.closest('.blog-card');
  if (blogCard) {
    const articleTitle = blogCard.querySelector('h2').textContent;
    const articleSlug = articleTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    window.location.href = `article.html?slug=${articleSlug}`;
  }
}

// Add click event listeners to all "Read More" buttons
document.addEventListener('DOMContentLoaded', function() {
  const readMoreButtons = document.querySelectorAll('.read-more');
  readMoreButtons.forEach(button => {
    button.addEventListener('click', handleReadMore);
  });
});


// Function to handle "Back to Top" button click
function handleBackToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', handleBackToTop);
  }
});

// ==========end===============

//  // Function to get URL parameters
//  function getUrlParameter(name) {
//     name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//     var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//     var results = regex.exec(location.search);
//     return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
// }

// // Function to load article content
// function loadArticle() {
//     const slug = getUrlParameter('slug');
//     // In a real application, you would fetch the article content from a server
//     // For this example, we'll use a simple object to simulate article data
//     const articles = {
//         'effective-leadership-strategies-for-business-growth': {
//             title: 'Effective Leadership Strategies for Business Growth',
//             content: 'Leadership is crucial for driving business growth. This article explores key strategies that effective leaders use to propel their organizations forward...'
//         },
//         // Add more articles here
//     };

//     const article = articles[slug];
//     if (article) {
//         document.getElementById('articleTitle').textContent = article.title;
//         document.getElementById('articleContent').textContent = article.content;
//     } else {
//         document.getElementById('articleTitle').textContent = 'Article Not Found';
//         document.getElementById('articleContent').textContent = 'Sorry, the requested article could not be found.';
//     }
// }

// // Handle star rating
// const stars = document.querySelectorAll('.star');
// stars.forEach(star => {
//     star.addEventListener('click', () => {
//         const rating = star.getAttribute('data-rating');
//         stars.forEach(s => {
//             s.classList.toggle('active', s.getAttribute('data-rating') <= rating);
//         });
//         // Here you would typically send this rating to your server
//         console.log(`Article rated: ${rating} stars`);
//     });
// });

// // Handle likes
// let likes = 0;
// const likeButton = document.getElementById('likeButton');
// const likeCount = document.getElementById('likeCount');
// likeButton.addEventListener('click', () => {
//     likes++;
//     likeCount.textContent = `${likes} like${likes !== 1 ? 's' : ''}`;
//     // Here you would typically send this like to your server
//     console.log('Article liked');
// });

// // Handle comments
// const commentForm = document.getElementById('commentForm');
// const commentsContainer = document.getElementById('commentsContainer');
// commentForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const commentText = document.getElementById('commentText').value;
//     const commentName = document.getElementById('commentName').value;
//     const commentElement = document.createElement('div');
//     commentElement.classList.add('comment');
//     commentElement.innerHTML = `
//         <strong>${commentName}</strong>
//         <p>${commentText}</p>
//     `;
//     commentsContainer.appendChild(commentElement);
//     commentForm.reset();
//     // Here you would typically send this comment to your server
//     console.log('Comment submitted:', { name: commentName, text: commentText });
// });

// // Load the article when the page loads
// window.addEventListener('DOMContentLoaded', loadArticle);

