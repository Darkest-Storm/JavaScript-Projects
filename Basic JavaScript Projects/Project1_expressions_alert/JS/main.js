window.alert('Hello, World!'); //Windows alert assignemnt (use window.alert)
document.write('Hello, World!'); //use document.write assignment

// make a var and use it in document.write 
var x = '<br> document.write(var) assignment complete';
document.write(x);

// string assignment 	1. Assign a string value to a variable.
//	2. Use the window.alert() method to display the variable.

var y = 'window.alert(var) assignemnt complete';
window.alert(y);

/*
Escape Character Assignment

write a string that contains an apostrophe and/or quotations marks.
*/

document.write('<br> write a string that contains an apostrophe, it\'s the assignemnt or I could \'quote\' instead')

//  Concatenation Assignment
//  concatenate a string within the document.write() method.

document.write('<br> write a string that '
+ 'uses concatenation. '
+ 'Mission Accomplished! '
);

// Concatenated String Challenge
// Assign a concatenated string value to a variable and display it in the browser.

var c = 'Concatedated' + " String" + ' Challenge' + " Complete!"
document.write('<br>' + c)

//  Multiple Variables Assignment
//  1. assign multiple variables in one statement.
//  2. Use the document.write() method to display one of the variables.
//    NOTE: You will be using these variables in the next assignment.

var Family = 'The Bradley', Dad = 'Jerry' , Mom = "christine"
document.write('<br> The man of the hour for ' + Family + ' family is ' + Dad)

//  Expression Assignment
//  Write an Expression

var d = 3 + 3
document.write('<br>' + d + " expression made and printed" + '<br><br><br>')

/* Basic JavaScript Projects Assignment
Minimum project requirements:
1. Utilize the window.alert() and document.write() methods

^ this has been accomplished above already

2. Create two variables:
	1. Sent1 with a string value of “This is the beginning of the string”
	2. Sent2 with a string value of “ and this is the end of the string”
    (done)
3. Concatenate the Sent1 and Sent2 variables together.
    (done)

4. Write an expression
    (done)

5. Write comments throughout your JavaScript explaining your code
    (done)

6. Utilize the script element and src attribute to link to your main.js file.
You can push more than the above list but your code must at least include these points.
*/

// Creating the 2 Variables Sent1 and Sent2 as described on lines 57 and 58

var Sent1='This is the beginning of the string', Sent2=' and this is the end of the string';

// concatenating and displaying sent1 and 2

document.write(Sent1 + Sent2 + '<br>')

// writing another expression for practive and for req #4

document.write(7 + 77 + 777)


