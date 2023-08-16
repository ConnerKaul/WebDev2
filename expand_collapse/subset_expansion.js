"use strict";

$(document).ready(function() {
    $("a").click( evt => {
        const h2 = evt.currentTarget;

        $(h2).toggleClass("hide");
		
        if ($(h2).attr("class") !== "hide") {
            $(h2).prev().hide();
			$(h2).text("Show more");
        }
        else {
            $(h2).prev().show();
			$(h2).text("Show less");
        }
		evt.preventDefault();
       
    }); // end click
}); // end ready
   
     