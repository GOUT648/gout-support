// ===== GLOBAL VARIABLES =====
let currentTheme = 'light';

// ===== PAGE NAVIGATION =====
function initPageNavigation() {
    // Handle nav link clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
            
            // Show target section
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active-section');
            });
            document.getElementById(targetId).classList.add('active-section');
            
            // Update URL without reload
            history.pushState(null, null, `#${targetId}`);
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
    
    // Handle initial page load
    const hash = window.location.hash.substring(1);
    const validSections = ['home', 'about', 'complaints', 'careers'];
    const defaultSection = validSections.includes(hash) ? hash : 'home';
    
    // Set active section
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active-section');
    });
    document.getElementById(defaultSection).classList.add('active-section');
    
    // Set active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${defaultSection}`) {
            link.classList.add('active');
        }
    });
}

// ===== THEME FUNCTIONS =====
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    // Update icon
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    currentTheme = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Set correct icon
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ===== FORM HANDLING =====
function initForms() {
    // Complaint form
    const complaintForm = document.getElementById('complaint-form');
    if (complaintForm) {
        complaintForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Prepare form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => formObject[key] = value);
            
            // Send to EmailJS (configured in setup)
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formObject)
                .then(() => {
                    // Show success message
                    const messageDiv = document.getElementById('form-message');
                    messageDiv.innerHTML = `
                        <div class="alert success">
                            <i class="fas fa-check-circle"></i> 
                            Your complaint has been submitted successfully! We'll contact you soon.
                        </div>
                    `;
                    
                    // Reset form
                    this.reset();
                    
                    // Remove message after 5 seconds
                    setTimeout(() => {
                        messageDiv.innerHTML = '';
                    }, 5000);
                })
                .catch(error => {
                    console.error('Error:', error);
                    const messageDiv = document.getElementById('form-message');
                    messageDiv.innerHTML = `
                        <div class="alert error">
                            <i class="fas fa-exclamation-circle"></i> 
                            Failed to submit complaint. Please try again or email us directly.
                        </div>
                    `;
                })
                .finally(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
    
    // Career application form
    const careerForm = document.getElementById('career-form');
    if (careerForm) {
        careerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Prepare form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => formObject[key] = value);
            
            // Send to EmailJS (configured in setup)
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formObject)
                .then(() => {
                    // Show success message
                    const messageDiv = document.getElementById('career-message');
                    messageDiv.innerHTML = `
                        <div class="alert success">
                            <i class="fas fa-check-circle"></i> 
                            Application submitted successfully! We'll review your application soon.
                        </div>
                    `;
                    
                    // Reset form
                    this.reset();
                    document.getElementById('application-form').style.display = 'none';
                    
                    // Remove message after 5 seconds
                    setTimeout(() => {
                        messageDiv.innerHTML = '';
                    }, 5000);
                })
                .catch(error => {
                    console.error('Error:', error);
                    const messageDiv = document.getElementById('career-message');
                    messageDiv.innerHTML = `
                        <div class="alert error">
                            <i class="fas fa-exclamation-circle"></i> 
                            Failed to submit application. Please try again or email us directly.
                        </div>
                    `;
                })
                .finally(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
}

// ===== JOB APPLICATION FORM TOGGLE =====
function initJobApplication() {
    const applyButtons = document.querySelectorAll('.apply-btn');
    const applicationForm = document.getElementById('application-form');
    
    if (!applyButtons.length || !applicationForm) return;
    
    applyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const jobTitle = btn.closest('.job-card').querySelector('h3').textContent;
            document.getElementById('job-title').textContent = jobTitle;
            document.getElementById('job-title-field').value = jobTitle;
            applicationForm.style.display = 'block';
            
            // Scroll to form
            applicationForm.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Initialize page navigation
    initPageNavigation();
    
    // Initialize forms
    initForms();
    
    // Initialize job application
    initJobApplication();
    
    // Initialize EmailJS (replace with your actual User ID)
    emailjs.init('YOUR_USER_ID');
});
