//Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.
function isItLetter(character) {

    if(character.toUpperCase() !=character.toLowerCase()){
        console.log(true)
        return true
    }else{
        console.log(false)
        return false
    }
  }