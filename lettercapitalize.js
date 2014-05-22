//Dave Boling 
//CoderByte.com
//Challenge: Letter Capitalize
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
1. Split the sentence into words
2. Loops through the word list
3. Split each word into an array of characters
4. Make the first character uppercase, then join the rest of the letter together 
5. Since we're technically added an extra character to new_str, we need to use substring to remove the origina
lowercase character.
6. Profit.

We could have just replaced letters[0] with it's uppercase alternative by 
doing this too: letters[0] = letters[0].toUpperCase

Then, we could simply do: new_str += letters.join('') + ' '; and gotten the same result

Bare in mind, we need the space (+ ' ';) at the end because when we split 'words' at the beginning, we split it
AT that space: str.split(' ');

So, for every word we add to new string, we gotta add that space!

*/


function LetterCapitalize(str) {
  
  var words = str.split(' ');
  var new_str = '';
  var letters;
  
  for (var i = 0; i < words.length; i++) {
    letters = words[i].split('');
    new_str += letters[0].toUpperCase() + letters.join('').substring(1) + ' ';
  }

   return new_str;
}



/* 
*BONUS*
How do we do this with regex?

Using the /g modifier, we're searching globally. Meaning, the whole string.

\w is checking for a word character [a-zA-Z0-9_]
\S is checking for checking for a non-space character after
* with 0 or more characters

Using the replace method with the following parameters:
1. What we're looking to replace
2. What we're replacing it with

Think of the first parameter in this case (the regex) as 
using string.match(), which would return 'hello world' as ['hello', 'world'].

Because it's returning them as an array of strings, we're about to make a function
to return that what the character is being replaced with! 

We use substring to remove the old character and there you have it!

Pretty cool eh? 

*/

function LetterCapitalize(str) { 

  return str.replace(/\w\S*/g, function(txt){
  	return txt.charAt(0).toUpperCase() + txt.substr(1);
  });
         
}




