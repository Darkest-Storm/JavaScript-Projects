// Loop Assignment
// create a while loop.

function Call_Loop(){
    var Digit = "", x = 1;
    while (x < 11){
        Digit += '<br>' + x;
        x++; 
    }
    document.getElementById('Loop').innerHTML = Digit
}


//  Length Property Challenge
//  write and execute the string length property

function Len(){
var test = 'Hello World!';
var length = test.length
document.getElementById('length').innerHTML = 'Hello World! is ' + length + " characters long including space"
}

//  For Loop Assignment
//  write a for loop

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = '';
var Y;
function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}

//  document.getElementById().innerHTML Assignment / Array Assignment
//  Utilize a function with the document.getElementById().innerHTML method
//  to display a value (or values) of your array.

function array_Function() {
    var Dog_Picture = ["Sleeping", "Playing", "Eating", "Excited"];
    document.getElementById("Array").innerHTML = "In this picture, the dog is " + 
        Dog_Picture[0] + ".";
}

/*  Const Keyword Assignment
  	1. Within the js file, take the following actions:
		a. Create an object through utilization of the const keyword.
		b. Include properties with values.
		c. Create a function (constant_function()) to be called from 
        your HTML that will display a string using the 
        document.getElementById("Constant").innerHTML method that 
        includes a property value (or property values) of your object.
	2. Then in the js file take the following actions:
		a. Change a property’s value.
		b. Add a property with a value.
		c. Display a string that includes the added property value and 
        the changed property value using 
        document.getElementById("Constant").innerHTML method.
*/

function constant_function(){
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = '$1,000'
    document.getElementById("Constant").innerHTML = "The cost of the " + 
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//  Let Keyword Assignment
//  Create an object using the “let” keyword
//  also completes Object Assignment

function my_First_Car(){
    let car = {
        make:'Honda', 
        model:'Accord',
        year:'1999',
        color:'Blue'
    }
    document.getElementById('let_assignment').innerHTML = 'My first car was a ' + car.year + " " + car.make + " " + car.model
}

//  Return Statment Challenge

function hello_User(){
    var name = document.getElementById('name').value
        function hello_name(name){
        return "Hello " + name
        }
    document.getElementById('hello_User').innerHTML = hello_name(name)
}

/*  Break and Continue Challenge
1. Define and learn how to utilize the break statement.
2. Write a loop that includes at least one break statement.
3. Define and learn how to utilize the continue statement.
4. Write a loop that includes at least one continue statement.
*/


let text_1 = ""
for (let i = 0; i <= 10; i++) {
    if (i === 3) { break; }
    text_1 += "The number is " + i + "<br>";
  } 
  document.getElementById("break").innerHTML = text_1;


let text_2 = ''    
  for (let i = 0; i <= 10; i++) {
    if (i === 3) { continue; }
    text_2 += "The number is " + i + "<br>";
  } 
  document.getElementById("continue").innerHTML = text_2;
