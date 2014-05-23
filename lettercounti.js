//Dave Boling 
//CoderByte.com
//Challenge: Array Addition I
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki

/* 
-----Explanation-----
Want an explanation? See the PNG file called arrayadditioni.png!
*/

function LetterCountI(str){
    
    str = str.split(' ');
    var char, regex, characters, currentBig = 0, word, charLength;


    for(var i = 0; i < str.length; i++){
        character = str[i];
        for(var k = 0; k < character.length; k++){
            char = new RegExp(character[k], 'g');
            charLength = character.match(char).length;
            if(charLength > 1) {
                if(charLength > currentBig){
                    currentBig = charLength;
                    word = character;
                }
            }
        }
    }
    if(currentBig < 2) {return -1;}
    else { return word; }
}

LetterCountI('due worllld hello'); //return 'worllld'
theFunk('due world helo'); //return -1

  
   




  
   


