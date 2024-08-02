// Local and Global Variable Assignment
//  a. Write a global variable.
//  b. Write a local variable.
//  c. Intentionally write a function with an error in it and 
//  use console.log() method to debug it within the console in Chrome Dev Tools.

var y = 20
function Add_numbers_1(){
    var x = 10;
    console.log(15 + x + y); // expected and get 25
}

function Add_numbers_2(){
    console.log(x + 100 + y) // wanted 110 get error x undefined due to 
                         // local variable x only accessable in 1st function
}

document.onload = Add_numbers_1();
// document.onload = Add_numbers_2(); // get error x is not defined


//  Method Assignment
//  1. write an id attribute and an onclick attribute within a <p> element
//  2.
//  a. Write out a function with an if statement that utilizes the new Date().getHours() method covered in the previous course step.
//  b. Write out a document.getElementById() method and reference the id attribute in the HTML file.

function my_Greeting(){
if (new Date().getHours() < 12){
    document.getElementById('Method_Assignment').innerHTML = "Good Morning Vietnam";
} else if (new Date().getHours() < 19){
    document.getElementById('Method_Assignment').innerHTML = "Good Evening Vietnam";
} else {
    document.getElementById('Method_Assignment').innerHTML = "Good Night";
}}

//  If Statement Assignment
//  write an if statement not using Date()

// window.onload =  // runs function on load for testing purposes to save clicks
function my_IF(){
if (1 > 0){
    document.getElementById('my_IF').innerHTML = "Math works";
} else {
    document.getElementById('my_IF').innerHTML = 'Math broke';
}}

/*  Else Assignment

1. HTML instructions

a. Write a <p> element providing the user with instructions.
b. Write an <input> element that contains an id attribute.
c. Write a <p> element that contains an id attribute.
d. write a <button> element that contains an onclick attribute that references your JavaScript function.

2. JS insctructions

a. Write a function that includes an if statement and an else statement.
b. Write the relevant document.getElementById() methods.
*/

function can_Work(){
    Age = document.getElementById('Age').value;
    if (Age < 12){
        Work = 'Will need a special permit to work';
    } else if (Age <= 13){
        Work = 'May work in the following limited roles: '
        + '<br> The child will be working as a camp assistant, assistant coach, referee or umpire and will not be performing any tasks listed in not light work'
        + '<br> The child is working for a family owned business and will not be performing any tasks listed in not light work'
        + '<br> The child will be performing in the entertainment industry';
    } else if (Age <= 15){
        Work = 'May work in the following limited roles: '
    + '<br> The child will be working as a camp assistant, assistant coach, referee or umpire and will not be performing any tasks listed in not light work'
    + '<br> The child is working for a family owned business and will not be performing any tasks listed in not light work'
    + '<br> The child will be performing in the entertainment industry '
    + '<br> The child will be doing light work only';
    } else {
        Work = 'Old enough to work';
    }
    document.getElementById('can_Work').innerHTML = Work;
}

// Else if assignment
// test the following function

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}