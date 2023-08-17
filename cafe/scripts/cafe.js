"use strict";

$(document).ready(function() {
	let total = 0;

// add hover handler and click handler to each image in table
	$("ul img").each(function() {
		var oldURL = this.src; 

	$(this).hover(function () {
		this.src = this.id; 
	}, function() {
		//Putting the image back with the oldURL variable
		this.src = oldURL; 
	}); 

	$(this).click(function(evt) {

	// using the image's alt value to check what value should be added.
	if (this.alt == 'espresso') {
		$('#order').append($('<option>', {
			value: 1,
			text: "$1.95 - Espresso"
		}));
		total += 1.95;
	}else if (this.alt == 'latte') {
		$('#order').append($('<option>', {
			value: 1,
			text: "$2.95 - Latte"
		}));
		total += 2.95;
	}else if (this.alt == 'cappuccino') {
		$('#order').append($('<option>', {
			value: 1,
			text: "$3.45 - Cappuccino"
		}));
		total += 3.45;
	} else if (this.alt == 'coffee') {
		$('#order').append($('<option>', {
			value: 1,
			text: "$1.75 - Coffee"
		}));
		total += 1.75;
	} else if (this.alt == 'biscotti') {
		$('#order').append($('<option>', {
			value: 1,
			text: "$1.95 - Biscotti"
		}));
		total += 1.95;
	} else if (this.alt == 'scone') {
		$('#order').append($('<option>', {
			value: 1,
			text: "$2.95 - Scone"
		}));
		total += 2.95;
	}

	$("#total")[0].innerHTML = "Total: $" + Number(total).toFixed(2);

	evt.preventDefault();

	}); 
	}); 

	$("#place_order").click(function() {
		if(total == 0){
			alert("Please add an item to the order and try again.");
		}else{
			window.location.href='checkout.html';
		}
	}); 

	// add click event handler for clear order button
	$("#clear_order").click(function() {

		$('#order').empty();
		$("#total")[0].innerHTML = "";
		total = 0;
	});

}); 