/*
 * Jason Sneddon - snedd001
 * CIS 444 - Homework 4 Fruit Stand Order Form
 * Homework4reg.js
 *
 * This file is used to register the event listeners.
 */

//Get the DOM addresses of the elements
var appleNode = document.getElementById("apple");
var orangeNode = document.getElementById("orange");
var bananaNode = document.getElementById("banana");
var submitNode = document.getElementById("submitButton");

//Register event listeners for verifyInput
appleNode.onchange = verifyInput();
bananaNode.onchange = verifyInput();
bananaNode.onchange = verifyInput();

//Register event listeners for computeTotalCost
appleNode.onclick = computeTotalCost();
bananaNode.onclick = computeTotalCost();
bananaNode.onclick = computeTotalCost();
submitNode.onclick = computeTotalCost();
