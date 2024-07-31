/*
Create a function that returns the result
of an addition operation to the paragraph element with the id “Math”.
*/

function myAdditionFunction(){
    var addition = 7 + 77
    document.getElementById("Math_add").innerHTML = '7 + 77 = ' + addition
}

/*
Create a function that returns the result
of an addition operation to the paragraph element with the id “Math”.
*/

function mySubtractFunction(){
    var subtract = 956 - 184
    document.getElementById("Math_sub").innerHTML = '956 - 184 = ' + subtract
}

/*
write a multiplication operation 
and a division operation 
and display the results of both.
*/

function myMultiDivisionFunction(){
    var multi = 70 * 48
    var div = Math.trunc(1000 / 69.99)
    document.getElementById("Math_multi_div").innerHTML = '70 x 48 = ' + multi 
    + "<br> 1000 / 69.99 = " + div + " truncated";
}

/*
write multiple math operations 
example (1+2) * 10 / 2 -5
*/

function myMultiOpsFunction(){
    var Multi_Ops = (99 + 69) * 10 / 20 -8
    document.getElementById('Math_multi_ops').innerHTML = '(99 + 69) * 10 / 20 - 8 = ' + Multi_Ops
}

// use Modulus Operator

function myModulusFunction(){
    var modulus = 25 % 6
    document.getElementById('Math_modulus').innerHTML = '25 % 6 = ' + modulus
}

// use Unary Operator

function myNegationFunction(){
    var neg = 10
    document.getElementById('Math_unary').innerHTML = "negation 10 = " + -neg
}

// use both increment and decrement Operators

function myCrementFunction(){
    var x = 10;
    var y = 10;
    x++
    y--
    document.getElementById('Math_crement').innerHTML = "incrementing 10 = " + x + ', decrementing 10 = ' + y
}

// use Math.random() also using the math method trunc

function random(){
    document.getElementById('Math_random').innerHTML = 'your RNG number is: ' + Math.trunc((Math.random() * 100))
}

// use a math object choosing Pie

function pie(){
    document.getElementById('Math_pi').innerHTML = 'PI is: ' + Math.PI
}