
/* Jason Sneddon - snedd001
 * CIS 444 - Homework 4 Fruit Stand Order Form
 * Homework4.js
 *
 * This is the JavaScript file used to verify the user input
 * and calculate the total cost basaed on their particular
 * requests for the respective fruits.
 */

//Function to verify the validity of user input
function verifyInput(){

     //Get the DOM addresses of the elements
     var appleNode = document.getElementById("apple");
     var orangeNode = document.getElementById("orange");
     var bananaNode = document.getElementById("banana");

     //Validate apple input
     if(appleNode.value < 0 || appleNode.value > 99 || isNaN(appleNode.value)){
          alert("Invalid quantity for apples! \n" +
                "Please enter a number between 0 and 99.");
          appleNode.value = "";
          appleNode.focus();
          return false;
     }

     //Validate orange input
     if(orangeNode.value < 0 || orangeNode.value > 99 || isNaN(orangeNode.value)){
          alert("Invalid quantity for oranges! \n" +
                "Please enter a number between 0 and 99.");
          orangeNode.value = "";
          orangeNode.focus();
          return false;
     }

     //Validate banana input
     if(bananaNode.value < 0 || bananaNode.value > 99 || isNaN(bananaNode.value)) {
          alert("Invalid quantity for bananas! \n" +
                "Please enter a number between 0 and 99.");
          bananaNode.value = "";
          bananaNode.focus();
          return false;
     }
     return true;
}

//Event listener function to compute the total cost
function computeTotalCost(){
     var cost = 0;
     var totalCost = 0;

     //Get the DOM addresses of the elements
     var appleNode = document.getElementById("apple");
     var orangeNode = document.getElementById("orange");
     var bananaNode = document.getElementById("banana");


     //compute the total compute
     cost = (appleNode.value * 0.59) + (orangeNode.value * 0.49) + (bananaNode.value * 0.39);
     cost = cost * 1.05
     totalCost = parseFloat(cost.toFixed(2));

     alert("Your total cost is $" + totalCost + ".\n" +
           "This includes 5% sales tax. ");
     //Return false to avoid actual submission
     return false;
}
