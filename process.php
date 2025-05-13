<?php
header('Content-Type: application/json');

$response = ['success' => false];

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_POST['name']) && isset($_POST['email'])) {
            // Complaint or Application
            $to = "goutcontact851@gmail.com";
            
            if (isset($_POST['category'])) {
                // Complaint processing
                $subject = "Complaint: " . htmlspecialchars($_POST['category']);
                $message = "From: " . htmlspecialchars($_POST['name']) . "\n";
                $message .= "Email: " . htmlspecialchars($_POST['email']) . "\n\n";
                $message .= htmlspecialchars($_POST['details']);
            } 
            else if (isset($_POST['position'])) {
                // Application processing
                $subject = "Application: " . htmlspecialchars($_POST['position']);
                $message = "Applicant: " . htmlspecialchars($_POST['name']) . "\n";
                $message .= "Email: " . htmlspecialchars($_POST['email']) . "\n";
                $message .= "Position: " . htmlspecialchars($_POST['position']) . "\n";
                
                if (isset($_FILES['resume'])) {
                    $uploads_dir = 'uploads';
                    if (!is_dir($uploads_dir)) mkdir($uploads_dir);
                    
                    $tmp_name = $_FILES['resume']['tmp_name'];
                    $name = basename($_FILES['resume']['name']);
                    move_uploaded_file($tmp_name, "$uploads_dir/$name");
                    $message .= "\nResume: $name";
                }
            }
            
            $headers = "From: " . htmlspecialchars($_POST['email']);
            
            if (mail($to, $subject, $message, $headers)) {
                $response['success'] = true;
                $response['message'] = "Submission received!";
            } else {
                $response['error'] = "Failed to send email";
            }
        }
    }
} catch (Exception $e) {
    $response['error'] = $e->getMessage();
}

echo json_encode($response);
?>
