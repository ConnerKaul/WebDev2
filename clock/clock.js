"use strict";
let timer = null;

const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
	let currentDate = new Date();
	
	document.getElementById('minutes').innerHTML = currentDate.getMinutes();
	document.getElementById('seconds').innerHTML = currentDate.getSeconds();
	
	if(currentDate.getHours() >= 12){
		document.getElementById('ampm').innerHTML = "pm";
	}else{
		document.getElementById('ampm').innerHTML = "am";
	}
	
	if(currentDate.getHours() > 12){
		document.getElementById('hours').innerHTML = currentDate.getHours() - 12;
	}else{
		document.getElementById('hours').innerHTML = currentDate.getHours();
	}
	
	if(document.getElementById('hours').innerHTML < 10){
		document.getElementById('hours').innerHTML = padSingleDigit(document.getElementById('hours').innerHTML);
	}
	
};

document.addEventListener("DOMContentLoaded", () => {
	// set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
	timer = setInterval(displayCurrentTime, 1000);
});