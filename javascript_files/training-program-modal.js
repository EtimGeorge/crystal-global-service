document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('program-modal');
    const closeBtn = document.querySelector('.close-modal');
    const programButtons = document.querySelectorAll('.training-program h2');
  
    function openModal(programId) {
      const program = document.getElementById(programId);
      const title = program.querySelector('h2').textContent;
      const description = program.querySelector('p').textContent;
      const details = program.querySelectorAll('.training-detail');
  
      document.getElementById('modal-title').textContent = title;
      document.getElementById('modal-description').textContent = description;
  
      const detailsList = document.getElementById('modal-details');
      detailsList.innerHTML = '';
      details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail.textContent;
        detailsList.appendChild(li);
      });
  
      modal.style.display = 'block';
    }
  
    programButtons.forEach(button => {
      button.addEventListener('click', () => {
        const programId = button.closest('.training-program').id;
        openModal(programId);
      });
    });
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });