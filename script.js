/* ===== GLOBAL STYLES ===== */
:root {
    /* Light theme */
    --bg-color: #f8f9fa;
    --text-color: #333344;
    --primary-color: #5e72e4;
    --secondary-color: #825ee4;
    --accent-color: #f5365c;
    --card-bg: #ffffff;
    --border-color: #e9ecef;
    --input-bg: #ffffff;
    --input-text: #495057;
    --footer-bg: #e9ecef;
    --shape-color-1: rgba(94, 114, 228, 0.1);
    --shape-color-2: rgba(133, 94, 228, 0.1);
    --shape-color-3: rgba(228, 94, 178, 0.1);
    --shape-color-4: rgba(94, 211, 228, 0.1);
}

[data-theme="dark"] {
    /* Dark theme */
    --bg-color: #121212;
    --text-color: #f1f1f1;
    --primary-color: #7c6cf0;
    --secondary-color: #9c6cf0;
    --accent-color: #ff6b6b;
    --card-bg: #1e1e1e;
    --border-color: #333344;
    --input-bg: #2d2d2d;
    --input-text: #f1f1f1;
    --footer-bg: #1a1a1a;
    --shape-color-1: rgba(124, 108, 240, 0.1);
    --shape-color-2: rgba(156, 108, 240, 0.1);
    --shape-color-3: rgba(240, 108, 192, 0.1);
    --shape-color-4: rgba(108, 228, 240, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
}

.background-shapes {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.7;
}

.shape-1 {
    width: 300px;
    height: 300px;
    background-color: var(--shape-color-1);
    top: -100px;
    left: -100px;
}

.shape-2 {
    width: 400px;
    height: 400px;
    background-color: var(--shape-color-2);
    bottom: -150px;
    right: -100px;
}

.shape-3 {
    width: 250px;
    height: 250px;
    background-color: var(--shape-color-3);
    top: 40%;
    left: 30%;
}

.shape-4 {
    width: 350px;
    height: 350px;
    background-color: var(--shape-color-4);
    top: 60%;
    right: 20%;
}

/* ===== HEADER & NAVIGATION ===== */
header {
    background-color: var(--primary-color);
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    background-color: white;
    padding: 5px;
}

.logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.logo-text {
    display: flex;
    flex-direction: column;
}

.logo-main {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
}

.logo-sub {
    font-size: 0.8rem;
    opacity: 0.9;
}

nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    transition: all 0.3s ease;
}

nav a:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
}

nav a.active {
    background-color: rgba(255, 255, 255, 0.25);
}

.nav-text {
    display: inline;
}

.settings {
    display: flex;
    align-items: center;
    gap: 1rem;
}

#theme-toggle {
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.3s ease;
}

#theme-toggle:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: rotate(30deg);
}

/* ===== MAIN CONTENT ===== */
main {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
    position: relative;
}

.page-section {
    display: none;
    animation: fadeIn 0.5s ease;
}

.page-section.active-section {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.hero {
    text-align: center;
    padding: 3rem 1rem;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
    position: relative;
    z-index: 2;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--text-color);
    opacity: 0.9;
    position: relative;
    z-index: 2;
}

.hero-images {
    position: relative;
    height: 200px;
    margin: 2rem 0;
}

.floating-shape {
    position: absolute;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: float 8s ease-in-out infinite;
    z-index: 1;
    opacity: 0.7;
    filter: blur(1px);
}

.shape-a {
    width: 150px;
    height: 150px;
    background-color: var(--shape-color-1);
    left: 10%;
    top: 0;
    animation-delay: 0s;
}

.shape-b {
    width: 180px;
    height: 180px;
    background-color: var(--shape-color-3);
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    animation-delay: 0.5s;
}

.shape-c {
    width: 120px;
    height: 120px;
    background-color: var(--shape-color-2);
    right: 10%;
    top: 0;
    animation-delay: 1s;
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(5deg); }
}

.cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    position: relative;
    z-index: 2;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 500;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn:hover {
    background-color: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(94, 114, 228, 0.2);
}

/* ===== ABOUT US PAGE ===== */
.about-page {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.about-hero {
    text-align: center;
    padding: 3rem 1rem;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: white;
    border-radius: 15px;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
}

.about-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    transform: rotate(30deg);
}

.about-hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
}

.highlight {
    color: var(--accent-color);
    font-weight: 700;
}

.about-content {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    position: relative;
    overflow: hidden;
}

.about-content::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: var(--shape-color-4);
    border-radius: 50%;
    filter: blur(60px);
    z-index: 0;
}

.about-content > * {
    position: relative;
    z-index: 1;
}

.about-content article {
    margin-bottom: 3rem;
}

.about-content h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.8rem;
}

.team-section {
    margin-top: 3rem;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.team-card {
    background: var(--card-bg);
    padding: 1.5rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 3px 10px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
}

.team-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}

.team-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.team-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 1rem;
    border: 3px solid var(--primary-color);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.values-list {
    list-style-type: none;
}

.values-list li {
    padding: 0.8rem;
    margin-bottom: 0.5rem;
    background: rgba(94, 114, 228, 0.1);
    border-left: 4px solid var(--primary-color);
    border-radius: 0 8px 8px 0;
    transition: transform 0.3s ease;
}

.values-list li:hover {
    transform: translateX(5px);
}

/* ===== FORM STYLES ===== */
.form-page {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
}

.form-page h1 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.form-page p {
    margin-bottom: 2rem;
    color: var(--text-color);
    opacity: 0.8;
}

form {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
}

form::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    background: var(--shape-color-2);
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0.3;
}

.form-group {
    margin-bottom: 1.5rem;
    position: relative;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-color);
}

input, textarea, select {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background-color: var(--input-bg);
    color: var(--input-text);
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
}

input:focus, textarea:focus, select:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 3px rgba(94, 114, 228, 0.2);
}

textarea {
    min-height: 150px;
    resize: vertical;
}

/* ===== CAREERS PAGE ===== */
.careers-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
}

.job-listings {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.job-card {
    background-color: var(--card-bg);
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
}

.job-card::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}

.job-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.job-card h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.job-card p {
    margin-bottom: 1rem;
    color: var(--text-color);
    opacity: 0.8;
}

.application-form {
    display: none;
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 15px;
    margin-top: 2rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

/* ===== FOOTER ===== */
footer {
    background-color: var(--footer-bg);
    padding: 1.5rem;
    text-align: center;
    margin-top: 3rem;
    position: relative;
}

footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}

/* ===== ALERTS ===== */
.alert {
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    animation: fadeIn 0.3s ease;
}

.alert.success {
    background-color: rgba(46, 204, 113, 0.2);
    color: #2ecc71;
    border-left: 4px solid #2ecc71;
}

.alert.error {
    background-color: rgba(231, 76, 60, 0.2);
    color: #e74c3c;
    border-left: 4px solid #e74c3c;
}

#form-message, #career-message {
    margin-top: 1rem;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
    header {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
    
    nav {
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .nav-text {
        display: none;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .cta-buttons {
        flex-direction: column;
    }
    
    .about-hero h1 {
        font-size: 2rem;
    }
    
    .team-grid {
        grid-template-columns: 1fr;
    }
    
    .floating-shape {
        max-width: 100px;
    }
    
    .shape-1, .shape-2, .shape-3, .shape-4 {
        display: none;
    }
}
