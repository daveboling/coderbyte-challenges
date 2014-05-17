//Dave Boling 
//CoderByte.com
//Challenge: First Reverse
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
Uses a for loop to go through a given string in reverse and returns 
it via newS
*/

function FirstReverse(str) {
  var newS = "";
  for(var i = str.length - 1; i >= 0; i--){
   newS += str[i];
  }
  return newS;
}

console.log(FirstReverse('I want this backwards'));