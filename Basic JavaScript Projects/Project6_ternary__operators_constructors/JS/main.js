//  JS Ternary operator check
//  to have a user input height in centimeters to see
//  if they're tall enough for a ride

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById('Height').value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById('Ride').innerHTML = Can_ride + ' to ride.';
}

//  Ternary Operators Challenge
//  create a basic program that outputs whether or not a user is old 
//  enough to vote.

//  In this program, the user will be able to input their age. 
//  If they are under 18, make it state, “You are not old enough to vote”
//  (or a different string of your choosing). 
//  If they are 18 or older, make it state, “You can vote!” 
//  (or a different string of your choosing).

function Voting_Age(){
    var age, can_vote
    age = document.getElementById('age').value
    can_vote = (age >= 18) ? 'You are old enough to vote, Please bring 2 pieces of goverment issued photo ID'
    :'You are not old enough to vote, you must be at least 18 years of age'
    document.getElementById('can_vote').innerHTML = can_vote
}

//  Keywords and constructor example
//  Specfically the "this" and "new" Keywords

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle('Dodge', 'Viper', 2020, 'Red');
var Emily = new Vehicle('Jeep', 'Trail Hawk', 2019, 'White and Black');
var Erik = new Vehicle('Ford', 'Pinto', 1971, 'Mustard');

function myFunction() {
    document.getElementById('Keywords_and_Constructors').innerHTML =  
    'Erik drives a ' 
    + Erik.Vehicle_Color + '-colored ' + Erik.Vehicle_Model 
    +' manufactured in ' + Erik.Vehicle_Year;
    
}

//  New Keyword Assignment
//  utilize the new keyword

var Kevin = new Vehicle('Honda', 'Accord', 1999, 'Navy Blue')

function myCar(){
    document.getElementById('New_and_This').innerHTML =  
    'Kevin drives a ' 
    + Kevin.Vehicle_Color + '-colored ' + Kevin.Vehicle_Model 
    +' manufactured in ' + Kevin.Vehicle_Year; 
}

// Reserved Keyword Challenge
// 1. Assign a variable the value of a reserved word. Attempt to display this in the browser.
// 2. Write an object constructor function.

/* 1.
var var = "variable" // gives error Unexpected token
document.write(var)
*/

// 2. Write an object constructor function.

function Pet(Species, Breed, Birthday, Color){
this.Pet_Species = Species;
this.Pet_Breed = Breed;
this.Pet_Birthday = Birthday;
this.Pet_Color = Color;
}

var Kevin = new Pet('Dog', 'Puggle', 'Unknown', 'Black and white')

function myPet(){
    document.getElementById('My_Pet').innerHTML =
    'Kevin\'s pet is a ' + Kevin.Pet_Species + ' being a lovely ' + Kevin.Pet_Breed
    + ' and has a coloring of ' + Kevin.Pet_Color
}

//  Nested Functions Assignment
//  write a nested function.
//  Ensure to include document.getElementById() method in your code and 
//  to reference the function in the <p> element. Save the file.

function count_function(){
    document.getElementById('Nested_Function').innerHTML = Count();
    function Count(){
        var Starting_point = 99;
        function Plus_one() {Starting_point += 101;}
        Plus_one();
        return Starting_point;
    }
}