//Dave Boling 
//CoderByte.com
//Challenge: Check Nums
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki

/* 
-----Explanation-----
Checking to see which of the two is greater and outputting
a true is num2>num1, false is num2<num1, and -1 if both are equal.

*/


function CheckNums(num1,num2) { 
  if (num2 > num1) { return 'true';}
  if (num2 === num1) { return -1; }
  if (num2 < num1) { return 'false'; }
}