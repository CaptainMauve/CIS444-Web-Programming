/* Jason Sneddon - snedd001
 * CIS 444 - Homework 5 - Display Picture
 * Homework5.js
 *
 * This is the JavaScript file used to change the position of 
 * a picture when the user clicks the mouse. 
 */
 
 
/* Function to position the center of the picture at the location
   of where the mouse is clicked. Center of picture is (100, 100) */
function mouseDown(evt){
	var pic = document.getElementById("myPicture");
	
	//Position left at horizontal axis of mouse 
	pic.style.left = (evt.clientX - 100) + "px";
	
	//Position top at vertial axis at of mouse 
	pic.style.top = (evt.clientY - 100) + "px";
	pic.style.visibility = "visible";
}
 
/* Hide picture when user lets go of the mouse */
function hidePic(){
	document.getElementById("myPicture").style.visibility = "hidden";	 
}