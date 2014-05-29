//Dave Boling 
//CoderByte.com
//Challenge: Letter Changes
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
*/

//Letter changes
function LetterChanges(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var vowels = ['a', 'e', 'i', 'o', 'u']; //array of vowels
  var alpha = alphabet.split(''); //array of alphabet characters
  var newWord = str.split(''); //array of str
    

//NEXT CHARACTER IN ALPHABET
  for (var i = 0; i < str.length; i++){
    for(var t = 0; t < alpha.length; t++){
      if(newWord[i] === alpha[t]){

            if(newWord[i] === 'Z'){
                newWord[i] = 'a';
                break; //need to break or else loop will continue
            }

        newWord[i] = alpha[t+1];
        break; //need to break or else loop will continue
      }
    }
  }

//IS IT A VOWEL?
for (var j = 0; j < newWord.length; j++) {
  for(var k = 0; k < vowels.length; k++){
    if (newWord[j] === vowels[k]){
      newWord[j] = newWord[j].toUpperCase();
      break;
    }
  }
}

  return newWord.join('');
         
}
