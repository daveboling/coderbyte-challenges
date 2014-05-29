//Dave Boling 
//CoderByte.com
//Challenge: Longest Word
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
Checks a given sentence (string) for the longest word that is a real word.

The word filter breaks the word into an array of string using the string method split().

The string 'special' is then loops through on each string in the array 'tester'. If it contains
a special character, then it is deleted.

Lastly, a for loop is used to check the array of actual words left over
and then outputs the largest word.
*/

function LongestWord (word) {
var wordS = word.split(' ');
var large = '';
var special = '123456789-={}|:"<>?!@#$%^&*()~`[]\;,./';
var tester;


//Word Filter
for (var j = 0; j < wordS.length; j++){
    tester = wordS[j].split('');

    for (var p = 0; p < tester.length; p++){

        for(var k = 0; k < special.length; k++){

	        if(tester[p] === special[k]){
	            delete wordS[j];
	        }
        }
    }
}


//Search for Largest Word
for (var i = 0; i < wordS.length; i++){
    if (wordS[i] === undefined) continue;
    else if(wordS[i].length > large.length){
        large = wordS[i];
    }
}

	return large;

}

console.log(LongestWord("antidisestablishmentarianism% is the biggest word, but because it's got the % character, it's ignored."));