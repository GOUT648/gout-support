document.addEventListener('DOMContentLoaded', function() {
    // AI Assistant Toggle
    const aiToggle = document.getElementById('ai-toggle');
    const aiAssistant = document.getElementById('ai-assistant');
    const aiClose = document.getElementById('ai-close');
    const aiMessages = document.getElementById('ai-messages');
    const aiInput = document.getElementById('ai-user-input');
    const aiSend = document.getElementById('ai-send');
    
    let aiActive = false;
    
    aiToggle.addEventListener('click', function() {
        aiActive = !aiActive;
        if (aiActive) {
            aiAssistant.classList.add('active');
            aiAssistant.style.display = 'flex';
            aiInput.focus();
        } else {
            aiAssistant.classList.remove('active');
            setTimeout(() => {
                aiAssistant.style.display = 'none';
            }, 300);
        }
    });
    
    aiClose.addEventListener('click', function() {
        aiActive = false;
        aiAssistant.classList.remove('active');
        setTimeout(() => {
            aiAssistant.style.display = 'none';
        }, 300);
    });
    
    // Send message function
    function sendMessage() {
        const message = aiInput.value.trim();
        if (!message) return;
        
        addMessage('user', message);
        aiInput.value = '';
        
        // Simulate typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message ai typing';
        typingIndicator.innerHTML = '<div class="typing-dots"><div></div><div></div><div></div></div>';
        aiMessages.appendChild(typingIndicator);
        aiMessages.scrollTop = aiMessages.scrollHeight;
        
        // Remove typing indicator after delay
        setTimeout(() => {
            if (typingIndicator.parentNode) {
                aiMessages.removeChild(typingIndicator);
            }
            
            // Get AI response
            const response = getAIResponse(message);
            addMessage('ai', response);
        }, 1500);
    }
    
    // Add message to chat
    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = text;
        aiMessages.appendChild(messageDiv);
        aiMessages.scrollTop = aiMessages.scrollHeight;
        
        // Add links if detected
        if (sender === 'ai') {
            const links = text.match(/https?:\/\/[^\s]+/g);
            if (links) {
                links.forEach(link => {
                    text = text.replace(link, `<a href="${link}" target="_blank">${link}</a>`);
                });
                messageDiv.innerHTML = text;
            }
        }
    }
    
    // AI response logic
    function getAIResponse(message) {
        const lowerMsg = message.toLowerCase();
        
        // Predefined responses
        const responses = {
            greeting: ["Hello! How can I help you today?", "Hi there! What can I do for you?", "Welcome to GOUT support!"],
            complaint: "You can submit complaints at our <a href='complaints.php'>Support Portal</a>. Would you like me to guide you through the process?",
            career: "We have exciting opportunities! Check our <a href='careers.php'>Careers Page</a> for current openings.",
            learnzy: "LearnZy is our flagship AI learning platform. You can find more information on our main website.",
            contact: "You can reach our support team at goutcontact851@gmail.com for any inquiries.",
            default: "I'm GOUT's AI assistant. I can help with support issues, career information, and general questions about our services."
        };
        
        // Response logic
        if (lowerMsg.includes('hi') || lowerMsg.includes('hello') || lowerMsg.includes('hey')) {
            return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
        } else if (lowerMsg.includes('complaint') || lowerMsg.includes('problem') || lowerMsg.includes('issue')) {
            return responses.complaint;
        } else if (lowerMsg.includes('job') || lowerMsg.includes('career') || lowerMsg.includes('hire')) {
            return responses.career;
        } else if (lowerMsg.includes('learnzy') || lowerMsg.includes('learn zi')) {
            return responses.learnzy;
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('reach')) {
            return responses.contact;
        } else {
            return responses.default;
        }
    }
    
    // Event listeners for AI
    aiSend.addEventListener('click', sendMessage);
    aiInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Initial welcome message
    setTimeout(() => {
        addMessage('ai', "Hello! I'm GOUT's AI assistant. How can I help you today?");
    }, 1000);
    
    // Form handling for complaints and careers
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;
            
            try {
                const response = await fetch('process.php', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Show success message
                    const successDiv = document.createElement('div');
                    successDiv.className = 'alert success';
                    successDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${result.message || 'Submission successful!'}`;
                    form.parentNode.insertBefore(successDiv, form.nextSibling);
                    
                    // Reset form
                    form.reset();
                    
                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successDiv.remove();
                    }, 5000);
                } else {
                    // Show error message
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'alert error';
                    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${result.error || 'Submission failed. Please try again.'}`;
                    form.parentNode.insertBefore(errorDiv, form.nextSibling);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            } finally {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .hero-content, .hero-image');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.feature-card, .hero-content, .hero-image').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});