$('#submit-lg').click(function(event) {

	event.preventDefault();

	var name = $('#first-name-lg').val() + ' ' + $('#last-name-lg').val();
	var email = $('#email-lg').val();
	var message = $('#message-lg').val();


    // Get the messages div.
    var formDiv = $('#form-messages-lg');
    var formMessage = $('#response-text-lg');

    Materialize.toast("Sending...", 5000);

    	$.ajax({
    		type: 'POST',
    		url: 'php/contactForm.php',
    		data: { name1: name, email1: email,	message1: message },
    		dataType: "text",
    		success: function(responseText){
			    $(formDiv).addClass('success');

			    // Set the message text.
			    $(formMessage).text(responseText);

				$('#first-name-lg').val('');
			    $('#last-name-lg').val('');
			    $('#email-lg').val('');
			    $('#message-lg').val('');
    		},
    		error: function(xhr, ajaxOptions, thrownError){
    			$(formDiv).addClass('error');

			    // Set the message text.
			    $(formMessage).text('Oops!  There seems to be a problem sending the mail at this time.  Try again later or alternatively send an email to kylienoellephotography@gmail.com with your message.');

    			alert(xhr.status);
    			alert(thrownError);
    		}
    	});
});
$('#submit-md').click(function(event) {

	event.preventDefault();

	var name = $('#first-name-md').val() + ' ' + $('#last-name-md').val();
	var email = $('#email-md').val();
	var message = $('#message-md').val();

    // Get the messages div.
    var formDiv = $('#form-messages-md');
    var formMessage = $('#response-text-md');

    Materialize.toast("Sending...", 5000);

    	$.ajax({
    		type: 'POST',
    		url: 'php/contactForm.php',
    		data: { name1: name, email1: email,	message1: message },
    		dataType: "text",
    		success: function(responseText){
			    $(formDiv).addClass('success');

			    // Set the message text.
			    $(formMessage).text(responseText);

				$('#first-name-md').val('');
			    $('#last-name-md').val('');
			    $('#email-md').val('');
			    $('#message-md').val('');
    		},
    		error: function(xhr, ajaxOptions, thrownError){
    			$(formDiv).addClass('error');

			    // Set the message text.
			    $(formMessage).text('Oops!  There seems to be a problem sending the mail at this time.  Try again later or alternatively send an email to kylienoellephotography@gmail.com with your message.');

    			alert(xhr.status);
    			alert(thrownError);
    		}
    	});
});
$('#submit-sm').click(function(event) {

	event.preventDefault();

	var name = $('#first-name-sm').val() + ' ' + $('#last-name-sm').val();
	var email = $('#email-sm').val();
	var message = $('#message-sm').val();


    // Get the messages div.
    var formDiv = $('#form-messages-sm');
    var formMessage = $('#response-text-sm');

    Materialize.toast("Sending...", 5000);

    	$.ajax({
    		type: 'POST',
    		url: 'php/contactForm.php',
    		data: { name1: name, email1: email,	message1: message },
    		dataType: "text",
    		success: function(responseText){
			    $(formDiv).addClass('success');

			    // Set the message text.
			    $(formMessage).text(responseText);

				$('#first-name-sm').val('');
			    $('#last-name-sm').val('');
			    $('#email-sm').val('');
			    $('#message-sm').val('');
    		},
    		error: function(xhr, ajaxOptions, thrownError){
    			$(formDiv).addClass('error');

			    // Set the message text.
			    $(formMessage).text('Oops!  There seems to be a problem sending the mail at this time.  Try again later or alternatively send an email to kylienoellephotography@gmail.com with your message.');

    			alert(xhr.status);
    			alert(thrownError);
    		}
    	});
});