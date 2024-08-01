//  Type Of Operator Assignment
//  Write the “document.write()” method and “type of” 
//  operator to display the data type of a variable of your choosing.
document.write('<br>')
document.write('typeof Assignment')
document.write('<br>')
var ten = '10'
document.write(typeof ten)
document.write('<br>')

// Testing Type Coercion

document.write('<br>')
document.write('Type Coercion Assignment')
document.write("<br> ten" + 10 + '<br>')

// NaN test

//  1. Utilize JavaScript to make the browser display NaN.
//  2. Utilize the isNaN() function to make the browser display “true.”
//  3. Utilize the isNaN() function to make the browser display “false.”
document.write('<br>')
document.write('NaN Assignment')
document.write('<br>')
document.write(0/0 + '<br>')
document.write(isNaN("not NaN") + "<br>")
document.write(isNaN(70) + '<br>')

//  Infinity
//  using the document.getElementById() method
//  write a large enough number and negative number 
//  to display “Infinity” and “-Infinity” respectively

function myInfinity(){
    document.getElementById('my_infinity').innerHTML = 2E310
}

function myNegInfinity(){
    document.getElementById('my_neg_infinity').innerHTML = -2E310
}

//  Boolean Assignment
//  use Boolean logic to display true and false.
document.write('<br>')
document.write('Boolean Assignment')
document.write('<br>')
document.write(10<11)
document.write('<br>')
document.write(10<11 && 10>11 )
document.write('<br>')

//  console.log Assignment
//  Perform a math operation useing console.log

//  display false using Boolean and console.log

console.log(Math.trunc(1000000/70))
console.log(69.99 > 70)

//  Double Equals Assignment
//  utilize == to return true and false
document.write('<br>')
document.write('Double Equal Signs Assignment')
document.write('<br>')
document.write(100==100)
document.write('<br>')
document.write(99==100)
document.write('<br>')

/*  Triple Equal Signs Assignment
		a. Return true by ensuring to match the data type and value.
		b. Return false by writing a different data type and different value.
		c. Return false by writing a different data type but the same value for both.
        d. Return false by writing the same data type but a different value for both.
*/
document.write('<br>')
document.write('Triple Equal Signs Assignment')
document.write('<br>')
document.write(100===100)
document.write('<br>')
document.write(100 === "dog")
document.write('<br>')
document.write(100 === "one hundred")
document.write('<br>')
document.write(100 === 101)
document.write('<br>')

//  AND OR Operator Assignment
//  Use AND, as well as OR to return both true and false
document.write('<br>')
document.write('AND OR Operator Assignment')
document.write('<br>')
document.write(10>9 && 9<10)  // and true
document.write('<br>')
document.write(9>10 && 9<10)  // and false
document.write('<br>')
document.write(8>9 || 10>9)   // OR true
document.write('<br>')
document.write(8<7 || 7<6)    // OR false
document.write('<br>')

//  Not Operator
//  utilize the NOT operator to display true and false.
document.write('<br>')
document.write('Not Opperator Assignment')
document.write('<br>')
document.write(!(10>11))
document.write('<br>')
document.write(!(10<11))
document.write('<br>')