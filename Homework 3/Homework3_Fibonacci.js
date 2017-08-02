
/* This is the JavaScript file for Homework 3.
 * 
 * This will include a function to compute the 
 * Fibonacci numbers based on the users input.
 * 
 * Description: Prompt the user to enter a number less than 100.
 *              The calcFibonacci function calculates the
 * 				fibonacci numbers from starting at 0 and ending
 *				at one more than the user input number. 
 */
 
var userInput = prompt("Enter a number less than 40: ");

var calcFibonacci = function(userNum){
	if(userNum == 0){
		return 0;
	}
	else if(userNum == 1){
		return 1;
	}
	//recursive call 
	else{
		return calcFibonacci(userNum - 1) + calcFibonacci(userNum - 2);
	}
}

/* Error Checking */
if(userInput > 40){
	document.write("Sorry, that number was over 40!");
}
else if(userInput < 0){
	document.write("Sorry, no negative numbers!");
}
/* Write table for acceptable numbers */
else{
	/* Open table */
	document.write("<table>");
	/* Write table header */
	document.write("<h1> Fibonacci Numbers </h1>");
	/* Open table first table row and write column headings */
	document.write("<tr>", "<th> Count </th>", "<th>Fibonacci Numbers</th>");
	
	for(var count = 0; count <= userInput; count++){
		//Write table row and cell tags and place the number value in the cell  
		document.write("<tr>", "<td>");
		document.write(count);
		
		//Write closing cell tag for count and opening cell tag for Fib numbers  
		document.write("</td>");
		document.write("<td>");
		
		//Write fibonacci numbers in cell and close the cell and row tags 
		document.write(calcFibonacci(count)); 
		document.write("</td>","</tr>");
	}
	document.write("</tr>", "</table>");
	
}