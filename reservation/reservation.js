"use strict";

$(document).ready( () => {
	
	$("#submit").click( evt => {
		let isValid = true;
		const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		
		// validate the arrival date entry  
		const arrivalDate = $("#arrival_date").val().trim();
		if (arrivalDate == "") {
			$("#arrival_date").next().text("This field is required.");
            isValid = false;
		} else {
			$("#arrival_date").next().text("");
		}
		$("#arrival_date").val(arrivalDate);
	    
		// validate the night stay entry
		const nightStay = $("#nights").val().trim();
		if (nightStay == "") {
			$("#nights").next().text("This field is required.");
			isValid = false;
		} else if (isNaN(nightStay)) {
            $("#nights").next().text("Must be numeric");
            isValid = false;
        } else {
			$("#nights").next().text("");
		}
        $("#nights").val(nightStay);
		
		// validate the name entry 
		const fullName = $("#name").val().trim();
        if (fullName == "") {
            $("#name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#name").next().text("");
        }
        $("#name").val(fullName);
		
		// validate email
		const email1 = $("#email").val().trim();
        if (email1 == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email1) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email1);
		
		const phoneNum = $("#phone").val().trim();
		if (phoneNum == "") {
			$("#phone").next().text("This field is required.");
			isValid = false;
		} else {
			$("#phone").next().text("");
		}
        $("#phone").val(phoneNum);
		
		if (isValid == false) {
			evt.preventDefault();
		}
	});

	$("#arrival_date").focus();
}); // end ready