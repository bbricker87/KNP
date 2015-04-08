$(document).ready(function() {

	$("#submit-lg").click(function() {
		var nameLg = $("#first-name-lg").val() + $('#last-name-lg').val();
		var emailLg = $("#email-lg").val();
		var messageLg = $("#message-lg").val();

		if(!validateName(nameLg) || nameLg == ''){
			Materialize.toast('Please use a valid name', 2500);
		}
		if(!validateEmail(emailLg) || emailLg == ''){
			Materialize.toast('Please use a valid email', 2500);
		}
		if(messageLg == ''){
			Materialize.toast('Please use a valid message', 2500);
		}

		// Checking for blank fields.
		if (nameValid && emailValid && messageValid) {
			// Returns successful data submission message when the entered information is stored in database.
			$.post("../php/contactForm.php", {
			name1: nameLg,
			email1: emailLg,
			message1: messageLg
			}, function(data) {
				$("#returnmessage").append(data); // Append returned message to message paragraph.
				if (data == "Your Query has been received, We will contact you soon.") {
					$("#first-name-lg").reset(); // To reset form fields on success.
				}
			});
		}
	});

	function validateName(nameVal){
		return /^[a-zA-Z()]+$/.test(nameVal);
	}

	function validateEmail(emailVal){
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  		return regex.test(emailVal);
	}
});