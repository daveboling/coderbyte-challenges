//Dave Boling 
//CoderByte.com
//Challenge: Vowel Count
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
Uses a regex to check for vowel with a regex using a global modifier.
*/


function VowelCount(str) {

  var vowels = /[aeiou]/g;
  
  return str.match(vowels).length;
}