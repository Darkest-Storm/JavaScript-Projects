// make a dictionary 
function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black & White",
        Breed:"Puggle",
        Age:4,
        Sound:"Ruff"
    //    Sound:"Bark!" // testing what happens when 2 keys are the same answer previous is overwritten
    };
    delete Animal.Sound // testing deleting the value that is about to be called
    document.getElementById('Dictionary').innerHTML = Animal.Sound; // since Animal.Sound was deleted it returns undefined 
}