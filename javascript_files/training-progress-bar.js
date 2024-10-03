function updateProgress(programId, completedPercentage) {
    const progressBar = document.querySelector(`#${programId} .progress-fill`);
    const progressText = document.querySelector(`#${programId} .progress-text`);
    
    progressBar.style.width = `${completedPercentage}%`;
    progressText.textContent = `${completedPercentage}% Complete`;
  }
  // Example usage:
  updateProgress('sales-mastery', 75);
  updateProgress('project-management', 90);
  updateProgress('software-development', 50);
  updateProgress('marketing-strategy', 85);

function toggleServiceModal(service) { 
    
    const modal = document.querySelector('.service-modal');
    const modalTitle = document.querySelector('.modal-title');
    const modalContent = document.querySelector('.modal-content');
    
    modal.style.display = 'block';
    
    if (service === 'sales-mastery') {
        modalTitle.textContent = 'Sales Mastery Training';
        modalContent.innerHTML = `
            <p>In today's competitive market, sales mastery is essential for achieving your desired revenue growth. This comprehensive training program will equip you with the skills and knowledge needed to excel in your sales role.</p>
            <img src="/api/placeholder/800/400" alt="Sales Mastery Training" class="modal-image">
            <ol>
                <li><strong>Understand Your Market and Customer Base:</strong> Learn how to identify your target audience, their needs, and their pain points.</li>
                <li><strong>Understand Your Market and Customer Base:</strong> 
    }
                // Add more service content here as needed
            </ol>
            <p>By joining this Sales Mastery training program, you'll develop the skills and knowledge needed to excel in your sales role and achieve your desired revenue growth.</p>
        `;
        
    } else if (service === 'project-management') {
        modalTitle.textContent = 'Project Management Training';
        modalContent.innerHTML = `
            <p>Project management is crucial for managing and achieving your company's goals. This comprehensive training program will equip you with the skills and knowledge needed to excel in your project management role.</p>
            <img src="/api/placeholder/800/400" alt="Project Management Training" class="modal-image">
            <ol>
                <li><strong>Understand Your Project Requirements:</strong> Learn how to define your project objectives, scope, and timeline.</li>
                <li><strong>Establish a Clear Project Team:</strong> Learn how to identify and select the right team members to work on your project.</li>
                <li><strong>Track and Monitor Your Progress:</strong> Learn how to use project management tools to track your project's progress and identify areas for improvement.</li>
                <li><strong>Manage Resources:</strong>
                // Add more service content here as needed
                </ol>
            <p>By joining this Project Management training program, you'll develop the skills and knowledge needed to excel in your project management role and achieve your desired revenue growth.</p>
            `;
    
    } else if (service === 'software-development') {
      modalTitle.textContent = 'Software Development Training';
      modalContent.innerHTML = `
        <p>Software development is essential for creating innovative solutions and products that meet your company's needs. This comprehensive training program will equip you with the skills and knowledge needed to excel in your software development role.</p>
        <img src="/api/placeholder/800/400" alt="Software Development Training" class="modal-image">
        <ol>
            <li><strong>Understand Your Software Requirements:</strong> Learn how to define your software requirements, features, and user stories.</li>
            <li><strong>Establish a Clear Development Team:</strong> Learn how to identify and select the right team members to work on your software development project.</li>
            <li><strong>Develop and Test Your Software:</strong> Learn how to use development tools, coding languages, and testing frameworks to develop and test your software.</li>
            <li> <strong> <a href="http://wwww.example.com</a> </strong>`;
            // Add more service content here as needed
            `</ol>
        <p>By joining this Software Development training program, you'll develop the skills and knowledge needed to excel in your software development role and achieve your desired revenue growth.</p>
        `;
    } else if (service === 'marketing-strategy') {
        modalTitle.textContent = 'Marketing Strategy Training';
        modalContent.innerHTML = `
            <p>Marketing strategy is essential for achieving your company's goals and increasing customer engagement. This comprehensive training program will equip you with the skills and knowledge needed to excel in your marketing strategy role.</p>
            <img src="/api/placeholder/800/400" alt="Marketing Strategy Training" class="modal-image">
            <ol>
                <li><strong>Understand Your Market and Customer Base:</strong> Learn how to identify your target audience, their needs, and their pain points.</li>
                <li><strong>Develop a Clear Marketing Plan:</strong> Learn how to define your marketing objectives, channels, and timing.</li>
                <li><strong>Establish a Clear Marketing Team:</strong> Learn how to identify and select the right team members to work on your marketing project.</li>
                <li><strong>Establish a Clear Analytics Team:</strong> Learn how to identify and select the right team</strong>`;
                // Add more service content here as needed

                `</ol>
            <p>By joining this Marketing Strategy training program, you'll develop the skills and knowledge needed to excel in your marketing strategy role and achieve your desired revenue growth.</p>
            `;
    } else {
        modal.style.display = 'none';
    }
}