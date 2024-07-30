//  Write a function that includes assigning two variables and utilizes 
//  the document.getElementById method

function myReplace() {
    var insert1 = 'Lets get ', insert2 = 'that gibberish replaced'
    insert2 += "!!" // Operator assignemnt utilize += to concate a string in JS
    document.getElementById('gibb').innerHTML=insert1 + insert2
}