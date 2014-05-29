//Dave Boling 
//CoderByte.com
//Challenge: Vowel Count
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
1. Two regex check to see how many x's and o' there are in a given string.
2. If the two match array lengths, return true. 
3. Else, return false.
*/

function ExOh(str) {

  var x, o;
  if (str.match(/x/) !== undefined){ x = str.match(/x/g).length; }
  if (str.match(/o/) !== undefined){ o = str.match(/o/g).length; }

console.log(x + " " + o);
  
  if (x === o){ return true; }
  else { return false; }
         
}

ExOh('xoox');