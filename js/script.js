// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from min up to the max
 */
function displayNumbers() {
  	// initialize the counter to minNum
	let counter = parseInt(document.getElementById('minNum').value)
	// initalize numbers as an empty string
	let numbers = ""
	
	// get the user number
	let userNum = parseInt(document.getElementById('maxNum').value)	

	// use a while loop to display the numbers from 0 up to the user number
	while (counter <= userNum) {
		// build the string of numbers with a line break each time
		numbers = numbers + counter + "<br>"
		// increment the counter
		counter = counter +1
	}
	
  	// return the string of numbers back to html
  	document.getElementById('display-results').innerHTML = numbers
}
