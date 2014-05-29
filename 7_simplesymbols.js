//Dave Boling 
//CoderByte.com
//Challenge: Simple Symbols
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki

/* 
-----Explanation-----
Using a couple of regular expressions, use the match() method to 
turn 'str' into an array of what we're looking for. We're looking for letters
that start with a + and end with a +. 

All we're really doing here, is comparing the length of 'str' to 'ar'.

This solution is not a 100% correct since an arguement of "z+z+z+" does not
evalaute correctly. 

The solution after, however, does work 100%. Look below for an
explanation.

*/

function SimpleSymbols(str) {

  var pattern = /\+[a-z]\+/g;
  var letters = /[a-z]*/g;
  var onlyLetters = str;
  str = str.match(pattern);
  var ar = onlyLetters.match(letters).join("").split('');
  

  if(str === null) { return false; }
  if(ar.length === str.length) {return true;}
  else {return false;}
 
         
}
