<?php
// Fetching Values from URL.
$name = $_POST['name1'];
$email = $_POST['email1'];
$message = $_POST['message1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.

// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

$subject = $name;
// To send HTML mail, the Content-type header must be set.
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:' . $email. "\r\n"; // Sender's Email
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function.
mail("bbricker09@gmail.com", $subject, $sendmessage, $headers);
echo "Your Query has been received, We will contact you soon.";

} else {
echo "<span>* invalid email *</span>";
}
?>