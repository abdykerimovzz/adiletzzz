// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
    } else {
        alert("Your message has been sent successfully!");
    }
});

// Modal functionality for Project Details
const projectElements = document.querySelectorAll('.project');
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const modalDescription = document.getElementById("modal-description");

projectElements.forEach(project => {
    project.addEventListener("click", function() {
        const projectId = project.getAttribute("data-project");
        modalDescription.textContent = `Full details of project #${projectId} will be displayed here.`;
        modal.style.display = "block";
    });
});

// Close Modal Window
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});