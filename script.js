// ===== TRANSLATIONS =====
const translations = {
    en: {
        // General
        title: "GOUT AI Solutions",
        subtitle: "AI Solutions",
        home: "Home",
        about: "About Us",
        support: "Support",
        careers: "Careers",
        copyright: "© 2023 GOUT Industries. All rights reserved.",
        
        // Hero section
        hero_title: "Elevate Your Experience With GOUT",
        hero_subtitle: "AI-powered solutions for modern businesses",
        get_support: "Get Support",
        join_team: "Join Our Team",
        learn_more: "Learn About Us",
        
        // AI Assistant
        ai_title: "GOUT Assistant",
        ai_placeholder: "Ask me anything...",
        
        // Complaint form
        complaint_title: "Submit Complaint - GOUT",
        complaint_heading: "Submit a Complaint",
        complaint_subtext: "We're here to help. Please fill out the form below.",
        name_label: "Your Name",
        email_label: "Email Address",
        category_label: "Issue Category",
        select_category: "Select a category",
        tech_issue: "Technical Issue",
        billing_issue: "Billing Problem",
        service_issue: "Service Complaint",
        message_label: "Detailed Description",
        message_placeholder: "Describe your issue in detail...",
        submit_btn: "Submit Complaint",
        
        // Careers
        careers_title: "Careers - GOUT",
        careers_heading: "Join Our Team",
        careers_subtext: "We're building the future of AI. Come be part of something amazing.",
        job1_title: "AI Engineer",
        job1_desc: "Work on cutting-edge AI projects like LearnZy.",
        job2_title: "Support Specialist",
        job2_desc: "Help users with our products and services.",
        apply_now: "Apply Now",
        apply_for: "Apply for",
        resume_label: "Resume (PDF)",
        submit_application: "Submit Application",
        
        // About Us
        about_title: "About GOUT - LearnZy Team",
        about_heading: "About GOUT & LearnZy",
        about_subheading: "Building the future of AI-powered education",
        who_we_are: "Who We Are",
        who_we_are_text: "LearnZy is an educational platform helping children learn mathematics in a personalized, interactive way. We're GOUT Industries - innovators in educational technology founded by Chirica Gheorghe and Siriteanu Nicolai.",
        our_mission: "Our Mission",
        our_mission_text: "We believe every child deserves equal access to quality education. Through technology and AI, we provide modern learning tools with constant support.",
        core_team: "Founders & Core Team",
        role_ceo: "CEO & Full-stack Developer",
        role_cto: "CTO & Front-end Developer",
        our_values: "Our Values",
        value1: "Transparency - Clear and honest communication",
        value2: "Respect - Active listening and acceptance",
        value3: "Innovation - Testing ideas, learning from mistakes",
        value4: "Responsibility - Owning our roles and impact",
        value5: "Mutual Support - Being there for each other"
    },
    ro: {
        // General
        title: "GOUT Soluții AI",
        subtitle: "Soluții AI",
        home: "Acasă",
        about: "Despre Noi",
        support: "Suport",
        careers: "Cariere",
        copyright: "© 2023 GOUT Industries. Toate drepturile rezervate.",
        
        // Hero section
        hero_title: "Îmbunătățește-ți experiența cu GOUT",
        hero_subtitle: "Soluții propulsate de AI pentru afaceri moderne",
        get_support: "Obține suport",
        join_team: "Alătură-te echipei",
        learn_more: "Află despre noi",
        
        // AI Assistant
        ai_title: "Asistent GOUT",
        ai_placeholder: "Întreabă-mă orice...",
        
        // Complaint form
        complaint_title: "Trimite reclamație - GOUT",
        complaint_heading: "Trimite o reclamație",
        complaint_subtext: "Suntem aici să te ajutăm. Completează formularul de mai jos.",
        name_label: "Numele tău",
        email_label: "Adresă de email",
        category_label: "Categoria problemei",
        select_category: "Selectează o categorie",
        tech_issue: "Problemă tehnică",
        billing_issue: "Problemă de facturare",
        service_issue: "Reclamație serviciu",
        message_label: "Descriere detaliată",
        message_placeholder: "Descrie problema în detaliu...",
        submit_btn: "Trimite reclamația",
        
        // Careers
        careers_title: "Cariere - GOUT",
        careers_heading: "Alătură-te echipei",
        careers_subtext: "Construim viitorul AI. Fii parte din ceva extraordinar.",
        job1_title: "Inginer AI",
        job1_desc: "Lucrează la proiecte AI de ultimă oră precum LearnZy.",
        job2_title: "Specialist Suport",
        job2_desc: "Ajută utilizatorii cu produsele și serviciile noastre.",
        apply_now: "Aplică acum",
        apply_for: "Aplică pentru",
        resume_label: "CV (PDF)",
        submit_application: "Trimite aplicația",
        
        // About Us
        about_title: "Despre GOUT - Echipa LearnZy",
        about_heading: "Despre GOUT & LearnZy",
        about_subheading: "Construim viitorul educației cu AI",
        who_we_are: "Cine Suntem",
        who_we_are_text: "LearnZy este o platformă educațională care ajută copiii să învețe matematica într-un mod personalizat și interactiv. Suntem GOUT Industries - inovatori în tehnologia educațională fondați de Chirica Gheorghe și Siriteanu Nicolai.",
        our_mission: "Misiunea Noastră",
        our_mission_text: "Credem că fiecare copil merită acces egal la educație de calitate. Prin tehnologie și AI, oferim instrumente moderne de învățare cu suport constant.",
        core_team: "Fondatori & Echipa de Bază",
        role_ceo: "CEO & Developer Full-stack",
        role_cto: "CTO & Developer Front-end",
        our_values: "Valorile Noastre",
        value1: "Transparență - Comunicare clară și onestă",
        value2: "Respect - Ascultare activă și acceptare",
        value3: "Inovație - Testăm idei, învățăm din greșeli",
        value4: "Responsabilitate - Ne asumăm rolurile și impactul",
        value5: "Sprijin Reciproc - Suntem acolo unii pentru alții"
    }
};

// ===== GLOBAL VARIABLES =====
let currentLanguage = 'en';
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

// ===== LANGUAGE FUNCTIONS =====
function applyTranslations(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'OPTION') {
                el.textContent = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    // Update form language hidden fields
    const formLangInputs = document.querySelectorAll('[id^="form-language"]');
    formLangInputs.forEach(input => {
        input.value = lang;
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update page title
    const activeSection = document.querySelector('.page-section.active-section');
    if (activeSection) {
        const sectionId = activeSection.id;
        if (sectionId === 'home') {
            document.title = translations[lang].title;
        } else if (sectionId === 'about') {
            document.title = translations[lang].about_title;
        } else if (sectionId === 'complaints') {
            document.title = translations[lang].complaint_title;
        } else if (sectionId === 'careers') {
            document.title = translations[lang].careers_title;
        }
    }
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

// ===== AI ASSISTANT FUNCTIONS =====
function initAIAssistant() {
    const aiToggle = document.getElementById('ai-toggle');
    const aiAssistant = document.getElementById('ai-assistant');
    const aiClose = document.getElementById('ai-close');
    const aiMessages = document.getElementById('ai-messages');
    const aiInput = document.getElementById('ai-input');
    const aiSend = document.getElementById('ai-send');
    
    if (!aiToggle) return;
    
    let aiActive = false;
    
    // Toggle assistant visibility
    aiToggle.addEventListener('click', () => {
        aiActive = !aiActive;
        aiAssistant.style.display = aiActive ? 'flex' : 'none';
    });
    
    // Close assistant
    aiClose.addEventListener('click', () => {
        aiActive = false;
        aiAssistant.style.display = 'none';
    });
    
    // Add message to chat
    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = text;
        aiMessages.appendChild(messageDiv);
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }
    
    // Get AI response based on language
    function getAIResponse(message) {
        const lowerMsg = message.toLowerCase();
        
        if (lowerMsg.includes('complaint') || lowerMsg.includes('problem') || lowerMsg.includes('reclama') || lowerMsg.includes('problemă')) {
            return currentLanguage === 'en' 
                ? "You can submit complaints on our support page. All complaints are sent to goutcontact851@gmail.com and will be addressed promptly." 
                : "Puteți trimite reclamații pe pagina noastră de suport. Toate reclamațiile sunt trimise la goutcontact851@gmail.com și vor fi rezolvate cât mai rapid posibil.";
        } else if (lowerMsg.includes('job') || lowerMsg.includes('career') || lowerMsg.includes('loc de muncă') || lowerMsg.includes('carieră')) {
            return currentLanguage === 'en'
                ? "Check our careers page for open positions. Applications are sent directly to goutcontact851@gmail.com."
                : "Verificați pagina noastră de cariere pentru posturi disponibile. Aplicațiile sunt trimise direct la goutcontact851@gmail.com.";
        } else if (lowerMsg.includes('about') || lowerMsg.includes('despre')) {
            return currentLanguage === 'en'
                ? "Learn more about us on the About page. GOUT Industries was founded by Chirica Gheorghe and Siriteanu Nicolai."
                : "Aflați mai multe despre noi pe pagina Despre Noi. GOUT Industries a fost fondată de Chirica Gheorghe și Siriteanu Nicolai.";
        } else {
            return currentLanguage === 'en'
                ? "I'm GOUT's AI assistant. How can I help you today? For direct support, email goutcontact851@gmail.com"
                : "Sunt asistentul AI al GOUT. Cum vă pot ajuta astăzi? Pentru suport direct, trimiteți un email la goutcontact851@gmail.com";
        }
    }
    
    // Handle message sending
    function sendMessage() {
        const message = aiInput.value.trim();
        if (!message) return;
        
        addMessage('user', message);
        aiInput.value = '';
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message ai typing';
        typingIndicator.innerHTML = '<div class="typing-dots"><div></div><div></div><div></div></div>';
        aiMessages.appendChild(typingIndicator);
        aiMessages.scrollTop = aiMessages.scrollHeight;
        
        // Remove typing indicator and show response after delay
        setTimeout(() => {
            if (typingIndicator.parentNode) {
                aiMessages.removeChild(typingIndicator);
            }
            const response = getAIResponse(message);
            addMessage('ai', response);
        }, 1000);
    }
    
    // Event listeners
    aiSend.addEventListener('click', sendMessage);
    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    
    // Initial welcome message
    setTimeout(() => {
        addMessage('ai', currentLanguage === 'en' 
            ? "Hello! I'm GOUT's AI assistant. How can I help you today? For direct support, email goutcontact851@gmail.com" 
            : "Bună! Sunt asistentul AI al GOUT. Cum vă pot ajuta astăzi? Pentru suport direct, trimiteți un email la goutcontact851@gmail.com");
    }, 1500);
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
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLanguage === 'en' ? 'Sending...' : 'Se trimite...');
            submitBtn.disabled = true;
            
            // Prepare form data
            const formData = new FormData(this);
            
            // Send to Formspree
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    const successDiv = document.createElement('div');
                    successDiv.className = 'alert success';
                    successDiv.innerHTML = '<i class="fas fa-check-circle"></i> ' + 
                        (currentLanguage === 'en' 
                            ? 'Your complaint has been submitted to goutcontact851@gmail.com!' 
                            : 'Reclamația dumneavoastră a fost trimisă la goutcontact851@gmail.com!');
                    this.parentNode.insertBefore(successDiv, this.nextSibling);
                    
                    // Reset form
                    this.reset();
                    
                    // Remove message after 5 seconds
                    setTimeout(() => {
                        successDiv.remove();
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert(currentLanguage === 'en' 
                    ? 'Failed to submit complaint. Please try again or email goutcontact851@gmail.com directly.' 
                    : 'Trimiterea reclamației a eșuat. Încercați din nou sau trimiteți direct un email la goutcontact851@gmail.com.');
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
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLanguage === 'en' ? 'Sending...' : 'Se trimite...');
            submitBtn.disabled = true;
            
            // Prepare form data
            const formData = new FormData(this);
            
            // Send to Formspree
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    const successDiv = document.createElement('div');
                    successDiv.className = 'alert success';
                    successDiv.innerHTML = '<i class="fas fa-check-circle"></i> ' + 
                        (currentLanguage === 'en' 
                            ? 'Application submitted to goutcontact851@gmail.com successfully!' 
                            : 'Aplicația a fost trimisă la goutcontact851@gmail.com cu succes!');
                    this.parentNode.insertBefore(successDiv, this.nextSibling);
                    
                    // Reset form
                    this.reset();
                    document.getElementById('application-form').style.display = 'none';
                    
                    // Remove message after 5 seconds
                    setTimeout(() => {
                        successDiv.remove();
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert(currentLanguage === 'en' 
                    ? 'Failed to submit application. Please try again or email goutcontact851@gmail.com directly.' 
                    : 'Trimiterea aplicației a eșuat. Încercați din nou sau trimiteți direct un email la goutcontact851@gmail.com.');
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
    
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            applyTranslations(lang);
            localStorage.setItem('language', lang);
        });
    });
    
    // Initialize language from localStorage
    const savedLang = localStorage.getItem('language') || 'en';
    applyTranslations(savedLang);
    
    // Initialize page navigation
    initPageNavigation();
    
    // Initialize AI assistant
    initAIAssistant();
    
    // Initialize forms
    initForms();
    
    // Initialize job application
    initJobApplication();
});
