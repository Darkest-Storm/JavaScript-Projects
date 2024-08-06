//  concat() Method Assignment
//  utilize the concat() method to connect two or more strings.

function concat_Test(){
    var part_1 = "I have ";
    var part_2 = "successfully used ";
    var part_3 = "the concate() method to connect strings."
    var full_concat = part_1.concat(part_2, part_3);
    document.getElementById('concat').innerHTML = full_concat;
}

//  slice() Method Assignment
//  write a slice() method that displays a section of a string.

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById('slice').innerHTML = Section.toUpperCase(); // adding toUpperCase() assignemnt here
}

//  search() Method Assignment

function my_Search(){
let text = "Please fine where locate occurs!";
let result = text.search("locate");
document.getElementById("search_test").innerHTML = result; 
}

//  Number (toString()) Method assignment
//  utilize the toString() method to return a number as a string.

    function my_Number_to_String(){
        var x = 747;
        document.getElementById('number_to_string').innerHTML = x.toString();
    }

//  toPrecision() Method Assignment
//   utilize the toPrecision() method to return a string as a number of a specified length.

function precision_Method(){
    var x = 3.1415926535897932385
    document.getElementById('precision').innerHTML = x.toPrecision(5)
}

//  toFixed() Method Assignment

function my_tofixed(){
    var x = 3.1415926535897932385
    document.getElementById('to_Fixed').innerHTML = x.toFixed(11)
}

//  valueOf() Method Assignment

function my_Value_Of(){
    var x = "Hello World!"
    var result = x.valueOf()
    document.getElementById('value_Of').innerHTML = result
}