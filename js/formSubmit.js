$(function() {

	var name = $('#first-name-lg').val() + ' ' + $('#last-name-lg').val();
	var email = $('#email-lg').val();
	var message = $('#message-lg').val();

    // Get the form.
    var form = $('#contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    $(form).submit(function(event) {
    	event.preventDefault();

    	var formData = "name1=" + name + "&email1=" + email + "&message1=" + message;

    	$.ajax({
    		type: 'POST',
    		url: 'php/contactForm.php',
    		data: formData
    	})
    	.done(function(response) {
		    // Make sure that the formMessages div has the 'success' class.
		    $(formMessages).removeClass('error');
		    $(formMessages).addClass('success');

		    // Set the message text.
		    $(formMessages).text(response);

		    // Clear the form.
		    $('#first-name-lg').val('');
		    $('#last-name-lg').val('');
		    $('#email-lg').val('');
		    $('#message-lg').val('');
		})
		.fail(function(data) {
		    // Make sure that the formMessages div has the 'error' class.
		    $(formMessages).removeClass('success');
		    $(formMessages).addClass('error');

		    // Set the message text.
		    if (data.responseText !== '') {
		        $(formMessages).text(data.responseText);
		    } else {
		        $(formMessages).text('Oops! An error occured and your message could not be sent.');
		    }
		});
    })
});