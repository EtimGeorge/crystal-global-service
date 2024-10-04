// Function to open enrollment modal
function openEnrollmentModal(programTitle) {
  const modal = document.getElementById('enrollment-modal');
  const programTitleSpan = document.getElementById('program-title');
  const programInput = document.getElementById('program');
  
  programTitleSpan.textContent = programTitle;
  programInput.value = programTitle;
  modal.style.display = 'block';
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('enrollment-modal');
  const enrollButtons = document.querySelectorAll('.enroll-btn');
  const closeBtn = modal.querySelector('.close');
  const enrollmentForm = document.getElementById('enrollment-form');

  // Open modal when enroll button is clicked
  enrollButtons.forEach(button => {
    button.addEventListener('click', function() {
      const programTitle = this.getAttribute('data-program');
      openEnrollmentModal(programTitle);
    });
  });

  // Close modal when clicking on the close button or outside the modal
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

 // Handle form submission
enrollmentForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(enrollmentForm);
  
  // Send data to server
  fetch('/enroll', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Enrollment submitted successfully! Please check your email for confirmation.');
    } else {
      alert('There was an error processing your enrollment. Please try again.');
    }
    modal.style.display = 'none';
    enrollmentForm.reset();
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error processing your enrollment. Please try again.');
  });
});});