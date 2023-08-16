"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;


const toggleDisplay = (label1Text, label2Text) => {
	document.getElementById('degree_label_1').innerHTML = label1Text;
	$("#degrees_computed").value = "";
	document.getElementById('degree_label_2').innerHTML = label2Text;
	$("#degrees_entered").focus();
}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {   
	let inputNum = parseInt($("#degrees_entered").value);
	let errorMessage = '';
	
	if(isNaN(inputNum)){
		errorMessage = "You must enter a valid number of degrees";
	}else{
		errorMessage = "Valid temperature";
	}
	
	if(document.getElementById('to_celsius').checked && errorMessage == "Valid temperature"){
		$("#degrees_computed").value = (calculateCelsius(inputNum).toFixed(0));
	}else if(errorMessage == "Valid temperature"){
		$("#degrees_computed").value = (calculateFahrenheit(inputNum).toFixed(0));
	}
	
	document.getElementById('message').innerHTML = errorMessage;
	$("#degrees_entered").focus();	
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#degrees_entered").focus();
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
});