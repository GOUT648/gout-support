<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $category = htmlspecialchars($_POST['category']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "goutcontact851@gmail.com";
    $subject = "New Complaint: $category";
    $body = "Name: $name\nEmail: $email\nCategory: $category\n\nMessage:\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        $success = "Your complaint has been submitted successfully!";
    } else {
        $error = "Failed to submit your complaint. Please try again.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submit Complaint - GOUT</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
    </div>

    <header class="glass-header">
        <div class="logo-container">
            <img src="https://media.discordapp.net/attachments/1303708196539727954/1370818809845256242/Messenger_creation_8B8F776A-76F8-4026-B6CD-900C2A277506.jpg" alt="GOUT Logo" class="logo">
            <div class="logo-text">
                <span class="logo-main">GOUT</span>
                <span class="logo-sub">AI Solutions</span>
            </div>
        </div>
        <nav>
            <a href="index.html"><i class="fas fa-home"></i> Home</a>
            <a href="complaints.php" class="active"><i class="fas fa-comment-dots"></i> Support</a>
            <a href="careers.php"><i class="fas fa-briefcase"></i> Careers</a>
            <a href="#" class="btn-login"><i class="fas fa-user"></i> Login</a>
        </nav>
    </header>

    <main class="form-page">
        <section class="form-container">
            <h1><i class="fas fa-headset"></i> Submit a Complaint</h1>
            <p>We're here to help. Please fill out the form below and we'll get back to you shortly.</p>
            
            <?php if (isset($success)): ?>
                <div class="alert success">
                    <i class="fas fa-check-circle"></i> <?= $success ?>
                </div>
            <?php elseif (isset($error)): ?>
                <div class="alert error">
                    <i class="fas fa-exclamation-circle"></i> <?= $error ?>
                </div>
            <?php endif; ?>
            
            <form method="POST">
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="category">Issue Category</label>
                    <select id="category" name="category" required>
                        <option value="">Select a category</option>
                        <option value="Technical Issue">Technical Issue</option>
                        <option value="Billing Problem">Billing Problem</option>
                        <option value="Service Complaint">Service Complaint</option>
                        <option value="Product Feedback">Product Feedback</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="message">Detailed Description</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" class="btn-primary">
                    <i class="fas fa-paper-plane"></i> Submit Complaint
                </button>
            </form>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
