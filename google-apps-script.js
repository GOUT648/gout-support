// Google Apps Script to handle form submissions
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Extract form data
    const name = data.name;
    const email = data.email;
    const category = data.category;
    const message = data.message;
    const language = data.language || 'en';
    
    // Email subject based on language
    const subject = language === 'ro' 
      ? `Reclamație nouă: ${category}` 
      : `New Complaint: ${category}`;
    
    // Email body
    const emailBody = language === 'ro'
      ? `
        Nume: ${name}
        Email: ${email}
        Categorie: ${category}
        
        Mesaj:
        ${message}
        
        Vă rugăm să răspundeți la această reclamație în cel mai scurt timp posibil.
      `
      : `
        Name: ${name}
        Email: ${email}
        Category: ${category}
        
        Message:
        ${message}
        
        Please respond to this complaint as soon as possible.
      `;
    
    // Send email
    GmailApp.sendEmail(
      'goutcontact851@gmail.com',
      subject,
      emailBody,
      {
        replyTo: email,
        name: 'GOUT Complaint System'
      }
    );
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'Complaint submitted successfully' })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
