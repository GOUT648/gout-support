<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process application
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $position = htmlspecialchars($_POST['position']);
    
    $to = "goutcontact851@gmail.com";
    $subject = "Job Application: $position";
    $message = "Applicant: $name\n";
    $message .= "Email: $email\n";
    $message .= "Position: $position\n";
    
    // Handle file upload
    if (isset($_FILES['resume'])) {
        $uploads_dir = 'uploads';
        if (!is_dir($uploads_dir)) mkdir($uploads_dir);
        
        $tmp_name = $_FILES['resume']['tmp_name'];
        $name = basename($_FILES['resume']['name']);
        move_uploaded_file($tmp_name, "$uploads_dir/$name");
        $message .= "\nResume: $name";
    }
    
    if (mail($to, $subject, $message)) {
        $success = "Your application has been submitted successfully!";
    } else {
        $error = "Failed to submit your application. Please try again.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Careers - GOUT</title>
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
            <a href="complaints.php"><i class="fas fa-comment-dots"></i> Support</a>
            <a href="careers.php" class="active"><i class="fas fa-briefcase"></i> Careers</a>
            <a href="#" class="btn-login"><i class="fas fa-user"></i> Login</a>
        </nav>
    </header>

    <main class="careers-page">
        <section class="jobs-intro">
            <h1><i class="fas fa-rocket"></i> Join Our Team</h1>
            <p>We're building the future of AI. Come be part of something amazing.</p>
        </section>
        
        <?php if (isset($success)): ?>
            <div class="alert success">
                <i class="fas fa-check-circle"></i> <?= $success ?>
            </div>
        <?php elseif (isset($error)): ?>
            <div class="alert error">
                <i class="fas fa-exclamation-circle"></i> <?= $error ?>
            </div>
        <?php endif; ?>
        
        <div class="job-categories">
            <div class="category-tabs">
                <button class="tab-btn active" data-category="all">All Positions</button>
                <button class="tab-btn" data-category="engineering">Engineering</button>
                <button class="tab-btn" data-category="support">Support</button>
                <button class="tab-btn" data-category="business">Business</button>
            </div>
            
            <div class="job-listings">
                <div class="job-card" data-category="engineering">
                    <h3>AI Engineer</h3>
                    <div class="job-meta">
                        <span><i class="fas fa-map-marker-alt"></i> Remote</span>
                        <span><i class="fas